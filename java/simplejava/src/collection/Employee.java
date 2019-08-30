package collection;

public class Employee {
	
	private int eID;
	private String eName;
	private int eAge;
	private String eAddress;
	private Project p;
	private String pr;
	
	public String getPr() {
		return pr;
	}

	public void setPr(String pr) {
		this.pr = pr;
	}

	public Employee(int eID, String eName, int eAge, String eAddress,Project p) {
		super();
		this.eID = eID;
		this.eName = eName;
		this.eAge = eAge;
		this.eAddress = eAddress;
		this.p = p;
	}
	
	public Employee(int eID, String eName, int eAge, String eAddress,String pr) {
		super();
		this.eID = eID;
		this.eName = eName;
		this.eAge = eAge;
		this.eAddress = eAddress;
		this.pr = pr;
	}
	@Override
	public String toString() {
		return "Employee [eID=" + eID + ", eName=" + eName + ", eAge=" + eAge + ", eAddress=" + eAddress + ", p=" + p
				+ "]";
	}

	public Project getP() {
		return p;
	}

	public void setP(Project p) {
		this.p = p;
	}

	public int geteID() {
		return eID;
	}
	public void seteID(int eID) {
		this.eID = eID;
	}
	public String geteName() {
		return eName;
	}
	public void seteName(String eName) {
		this.eName = eName;
	}
	public int geteAge() {
		return eAge;
	}
	public void seteAge(int eAge) {
		this.eAge = eAge;
	}
	public String geteAddress() {
		return eAddress;
	}
	public void seteAddress(String eAddress) {
		this.eAddress = eAddress;
	}
	
}
