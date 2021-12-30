package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Employee;
import com.example.demo.repository.EmployeeRepository;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/emp")
public class EmployeeController {
	@Autowired
	EmployeeRepository repository;
	
	@PostMapping("/empAdd")
	public Employee EmployeeAdd(@RequestBody Employee emp)
	{
		return repository.save(emp);
	}
	@GetMapping("/getById/{id}")
	public Optional<Employee> findOne(@PathVariable("id") String id)
	 {
		 return repository.findById(id);
	 }
	@GetMapping("/empGet")
	 public List<Employee> getAllEmployees()
		{
			return repository.findAll();	
		}
	@PostMapping("/empDelete/{id}")
	 public void deleteEmployee(@PathVariable String id)
	 {
		 repository.deleteById(id);
	 }
	@PostMapping("/empUpdate/{id}")
	 public void updateEmployee(@PathVariable String id ,@RequestBody Employee emp ) {
		 repository.findById(id);
		 repository.save(emp);
	 }

}
