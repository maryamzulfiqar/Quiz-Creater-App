package com.example.spring.quiz.maryam.myEntitiy;

import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Data
@Entity
@NoArgsConstructor
public class Option {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String option;
    private Boolean isRit;

    public Option(int id, String option, Boolean isRit) {
        this.id = id;
        this.option = option;
        this.isRit = isRit;
    }

}
