package collection;

import java.util.ArrayList;
import java.util.List;

public class FilterUsingStreams {

	public void filterStreams() {
		List<Employee> l = new ArrayList<Employee>();

		l.add(new Employee(10, "Ankit", 22, "Banglore", new Project(11, "ATT")));
		l.add(new Employee(11, "Satwinder", 22, "Banglore", new Project(12, "JAVA")));
		l.add(new Employee(12, "Hari", 22, "Pune", new Project(13, "Bank")));
		l.add(new Employee(13, "Aditya", 22, "Banglore", new Project(11, "ATT")));
		l.add(new Employee(14, "Rahul", 22, "Delhi", new Project(12, "JAVA")));
		l.add(new Employee(15, "Alok", 22, "Kolkata", new Project(13, "Bank")));
		FilterdEmployee fe = new FilterdEmployee();
		List<String> p = new ArrayList<String>();
		p = fe.projectList(l);

		List<Employee> newlist = new ArrayList<Employee>();
		// Employee e = new Employee();
		for (Employee e : l) {
			for (String s : p) {
				if (e.getP().getpName().equals(s)) {
					e.setPr(s);
				}
			}
		}

		l.forEach(emp -> System.out.println(emp));
		System.out.println("Streams Filter:");

		
		/*
		 * List<Employee> attEmps = l.stream().filter(emp -> { return
		 * "ATT".equals(emp.getP().getpName()); }).collect(Collectors.toList());
		 * 
		 * List<Employee> javaEmps = l.stream().filter(emp -> { return
		 * "JAVA".equals(emp.getP().getpName()); }).collect(Collectors.toList());
		 * 
		 * List<Employee> bankEmps = l.stream().filter(emp -> { return
		 * "Bank".equals(emp.getP().getpName()); }).collect(Collectors.toList());
		 */
		// System.out.println("ATT Project:");
		// for(Employee e:attEmps) {
		// System.out.println(e);
		// }
		//
		// System.out.println("JAVA Project:");
		// for(Employee e:javaEmps) {
		// System.out.println(e);
		// }
		//
		// System.out.println("Bank Project:");
		// for(Employee e:bankEmps) {
		// System.out.println(e);
		// }
		List<FilterdEmployee> li = new ArrayList<FilterdEmployee>();
		List<FilterdEmployee> updatedLst = new ArrayList<FilterdEmployee>();

		for (Employee e : l) {
			for (FilterdEmployee fe1 : li) {
				if (e.getP().getpName().equals(e.getPr())) {

					fe1.getLi().add(e);
					List<Employee> updatedEmps = fe1.getLi();
					updatedEmps.add(e);
					FilterdEmployee updateEmp = new FilterdEmployee(e.getP().getpName(), updatedEmps);
					updatedLst.add(updateEmp);
				} else {

					List<Employee> updatedEmps = new ArrayList<Employee>();
					updatedEmps.add(e);
					FilterdEmployee updateEmp = new FilterdEmployee(e.getP().getpName(), updatedEmps);
					updatedLst.add(updateEmp);
				}
			}
			if (li.isEmpty()) {
				List<Employee> lii = new ArrayList<Employee>();
				lii.add(e);
				li.add(new FilterdEmployee(e.getP().getpName(), lii));
			}

		}
		for (FilterdEmployee fe2 : updatedLst) {
			System.out.println(fe2);
		}
	}

	public static void main(String[] args) {

		FilterUsingStreams obj = new FilterUsingStreams();
		obj.filterStreams();

	}

}
