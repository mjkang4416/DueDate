package castingTask;


public class CastingTask {
	
	public void checkVideo(Video video) {
		if(video instanceof Drama) {
			Drama drama = (Drama) video; 
			drama.dra();
		}
		else if(video instanceof Animation) {
			Animation animation = (Animation) video; 
			animation.ani();
		}
		else if(video instanceof Film) {
			Film film = (Film) video; 
			film.fil();
		}
		
}
	public static void main(String[] args) {
		CastingTask castingtask = new CastingTask();
		castingtask.checkVideo(new Drama());
		castingtask.checkVideo(new Film());
		castingtask.checkVideo(new Animation());
	}

}