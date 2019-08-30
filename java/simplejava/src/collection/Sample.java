package collection;

import java.util.ArrayList;
import java.util.List;

public class Sample {

	public static void main(String[] args) {

		List<Employee> emps = new ArrayList<Employee>();

		emps.add(new Employee(10, "Ankit", 22, "Banglore", new Project(11, "ATT")));
		emps.add(new Employee(11, "Satwinder", 22, "Banglore", new Project(12, "JAVA")));
		emps.add(new Employee(12, "Hari", 22, "Pune", new Project(13, "Bank")));
		emps.add(new Employee(13, "Aditya", 22, "Banglore", new Project(11, "ATT")));
		emps.add(new Employee(14, "Rahul", 22, "Delhi", new Project(12, "JAVA")));
		emps.add(new Employee(15, "Alok", 22, "Kolkata", new Project(13, "Bank")));

		emps.stream().map(emp -> {
			List<Employee> fEmps = new ArrayList<Employee>();
			FilterdEmployee fEmp = new FilterdEmployee();
			// fEmp.setLi(fEmps);
			emps.forEach(e -> {
				if (e.getP().getpName().equals(emp.getP().getpName()) && e.geteID() != emp.geteID()) {
					fEmp.setP(e.getP().getpName());
					fEmps.add(new Employee(emp.geteID(), emp.geteName(), emp.geteAge(), emp.geteAddress(), emp.getP()));
					fEmp.setLi(fEmps);
				}
			});
			return fEmp;
		}).forEach(e -> {
			System.out.println(e);
		});

		List<FilterdEmployee> fEmpLst = new ArrayList<FilterdEmployee>();

		for (Employee emp : emps) {
			List<Employee> fEmps = new ArrayList<Employee>();
			FilterdEmployee fEmp = new FilterdEmployee();
			if (!fEmpLst.isEmpty()) {
				for (FilterdEmployee femp : fEmpLst) {
					if (femp.getLi() != null && emp.getP().getpName().equals(femp.getP())) {
						// update existing list of emps
						femp.getLi().add(emp);
					} else if (femp.getLi() == null && emp.getPr().equals(femp.getP())) {
						fEmps.add(emp);
						femp.setLi(fEmps);
					} else {
						List<Employee> newFEmps = new ArrayList<Employee>();
						newFEmps.add(emp);
						femp.setLi(newFEmps);
						fEmpLst.add(femp);
					}
				}
			} else {

				List<Employee> newFEmps = new ArrayList<Employee>();
				newFEmps.add(emp);
				// femp.setLi(newFEmps);
				fEmpLst.add(new FilterdEmployee(emp.getP().getpName(), newFEmps));
			}
		}
		fEmpLst.forEach(e -> System.out.println(e));
	}

}
