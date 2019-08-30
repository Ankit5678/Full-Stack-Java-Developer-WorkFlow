package collection;

public class Project {
	private int pID;
	private String pName;
	
	Project(int pID, String pName){
		this.pID = pID;
		this.pName = pName;
	}
	
	public int getpID() {
		return pID;
	}
	public void setpID(int pID) {
		this.pID = pID;
	}
	@Override
	public String toString() {
		return "Project [pID=" + pID + ", pName=" + pName + "]";
	}

	public String getpName() {
		return pName;
	}
	public void setpName(String pName) {
		this.pName = pName;
	}
}
