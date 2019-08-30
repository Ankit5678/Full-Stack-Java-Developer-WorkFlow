package collection;

import java.util.ArrayList;
import java.util.List;

public class FilterdEmployee {
	private Employee e;
	private Project pro;
	private String p;
	private List<Employee> li = new ArrayList<Employee>();
	// private List<String> lii = new ArrayList<String>();

	FilterdEmployee() {

	}

	public String getP() {
		return p;
	}

	public Project getPro() {
		return pro;
	}

	public void setPro(Project pro) {
		this.pro = pro;
	}

	public List<Employee> getLi() {
		return li;
	}

	public void setLi(List<Employee> li) {
		this.li = li;
	}

	public void setP(String p) {
		this.p = p;
	}

	public Employee getE() {
		return e;
	}

	public void setE(Employee e) {
		this.e = e;
	}

	public FilterdEmployee(String p, List<Employee> li) {
		super();
		this.p = p;
		this.li = li;
	}

	@Override
	public String toString() {
		return "FilterdEmployee [p=" + p + ", li=" + li + "]";
	}

	List<String> projectList(List<Employee> l) {
		List<String> p = new ArrayList<String>();
		for (Employee e : l) {
			p.add(e.getP().getpName());
		}
		return p;
	}

}
