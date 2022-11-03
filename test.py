from audioop import add
from selenium import webdriver
from selenium.webdriver.common.by import By
import string
import time
import os
import django
url_list = []
datas = []
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "CafeMaster.settings")
django.setup()

from articles.models import Cafe
def naverMapCrawling(search):
    driver = webdriver.Chrome("./chromedriver.exe") #selenium 사용에 필요한 chromedriver.exe 파일 경로 지정

    driver.get(f"https://m.map.naver.com/search2/search.naver?query={search}") 
    driver.implicitly_wait(3) # 로딩이 끝날 때 까지 10초까지는 기다림

    # 개별 url 접속 안 했을 때 사용할 변수 (li태그)
    items = driver.find_elements(By.CSS_SELECTOR, '._item')

    # items에서 url만 가지고 온 리스트 만들기
    my_url_list = []
    for item in items:
        aitem = item.find_element(By.CSS_SELECTOR, '.item_info > .item_common > .naver-splugin')
        sub_url = aitem.get_attribute('data-url')
        my_url_list.append(sub_url)


    cnt = 0
    for url in my_url_list:
        # url 하나씩 들어감
        driver.get(url)
        driver.implicitly_wait(3)

        cnt += 1
        # 들어가서 뽑을 것: 사진, 주차, 영업시간, 특이사항
        name = driver.find_element(By.CSS_SELECTOR, '.Fc1rA').text
        address = driver.find_element(By.CSS_SELECTOR,'.IH7VW').text
        tel = driver.find_element(By.CSS_SELECTOR, '.dry01').text
        print(name, address, tel)
        map_url = driver.find_element(By.CSS_SELECTOR, '.qPoU1').get_attribute('href')

        displayOk1 = driver.find_element(By.CSS_SELECTOR, '#ibu_1').is_displayed();
        if displayOk1:
            picture1 = driver.find_element(By.CSS_SELECTOR, '#ibu_1').get_attribute('style').replace('width: 100%; height: 100%; background-image: url("', '').replace('"); background-position: 50% 0px;', '')
        else:
            picture1 = driver.find_element(By.CSS_SELECTOR, '#ugc_1').get_attribute('style').replace('width: 100%; height: 100%; background-image: url("', '').replace('"); background-position: 50% 0px;', '')
        
        displayOk2 = driver.find_element(By.CSS_SELECTOR, '#ibu_2').is_displayed();
        if displayOk2:
            picture2 = driver.find_element(By.CSS_SELECTOR, '#ibu_2').get_attribute('style').replace('width: 100%; height: 100%; background-image: url("', '').replace('"); background-position: 50% 0px;', '')
        else:
            picture2 = driver.find_element(By.CSS_SELECTOR, '#ugc_2').get_attribute('style').replace('width: 100%; height: 100%; background-image: url("', '').replace('"); background-position: 50% 0px;', '')

        displayOk3 = driver.find_element(By.CSS_SELECTOR, '#ibu_3').is_displayed();
        if displayOk3:
            picture3 = driver.find_element(By.CSS_SELECTOR, '#ibu_3').get_attribute('style').replace('width: 100%; height: 100%; background-image: url("', '').replace('"); background-position: 50% 0px;', '')
        else:
            picture3 = driver.find_element(By.CSS_SELECTOR, '#ugc_3').get_attribute('style').replace('width: 100%; height: 100%; background-image: url("', '').replace('"); background-position: 50% 0px;', '')

        driver.find_element(By.CSS_SELECTOR, '.MxgIj').click()
        open_list = driver.find_elements(By.CSS_SELECTOR, '.nNPOq')[1:]
        opening = ''

        for opens in open_list:
            try:
                day = opens.find_element(By.CSS_SELECTOR, '.X007O > .ob_be > .kGc0c').text
                times = opens.find_element(By.CSS_SELECTOR, '.X007O > .ob_be > .qo7A2').text
                opening = day + ' ' + times + '\n'
            except:
                break


        for character in string.punctuation:
            name = name.replace(character, '') # 특수기호 제거(파이어베이스에 경로로 저장하기 위해서)
        #document.querySelector("#ct > div.search_listview._content._ctList > ul > li:nth-child(1) > div.item_info > a.a_item.a_item_distance._linkSiteview > div > em")
        #ct > div.search_listview._content._ctList > ul > li:nth-child(1) > div.item_info > a.a_item.a_item_distance._linkSiteview > div > em
        datas.append({
            "name" : name,
            "address" : address,
            "telephone" : tel,
            "map_url": map_url,
            "opening": opening,
            # "additional_info": additional_info,
            "picture1": picture1,
            "picture2": picture2,
            "picture3": picture3,
            })
        
        # 뒤로가기
        # driver.find_element(By.CSS_SELECTOR, '.DDfpb').click()
        # driver.back()
        # driver.implicitly_wait(3)
        # driver.get(f"https://m.map.naver.com/search2/search.naver?query={search}") 

        #딱 30개만
        if cnt > 30:
            break
        # return datas

def add_data():
    result = []

    # 자료 수집 함수 실행
    for data in datas:
        tmp = data
        # 만들어진 dic를 리스트에 저장
        result.append(tmp)

    # DB에 저장
    for item in result:
        Cafe (
            name = item["name"],
            address = item["address"],
            telephone = item["telephone"],
            map_url = item["map_url"],
            opening = item["opening"],
            # additional_info = item["additional_info"],
            picture1 = item["picture1"],
            picture2 = item["picture2"],
            picture3 = item["picture3"],
            ).save()
    return result


# DB 저장 함수 강제 실행(임시로 실행)
search = input("검색어를 입력해주세요 >> ")
naverMapCrawling(search)
add_data()