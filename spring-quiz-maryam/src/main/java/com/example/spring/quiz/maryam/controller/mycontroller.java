package com.example.spring.quiz.maryam.controller;

import com.example.spring.quiz.maryam.myEntitiy.Myquiz;
import com.example.spring.quiz.maryam.myrepository.myquiz;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class mycontroller {


    @Autowired
    myquiz myrepository;
    @GetMapping(value = "/all")
    public List<Myquiz> total_data(){
        return (List<Myquiz>) myrepository.findAll();
    }

    @PostMapping(value = "/load")
    public List<Myquiz> persist(@RequestBody Myquiz store){
        myrepository.save(store);
        return (List<Myquiz>) myrepository.findAll();
    }

}
