package com.example.spring.quiz.maryam.myEntitiy;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.mapping.Set;

import javax.persistence.*;
import java.util.Set;

@Data
@Entity
@NoArgsConstructor
public class Qstn<String> {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column(columnDefinition = "TEXT")
    private String qstn;
    private int points;
    private String type;

    @OneToMany(cascade = {CascadeType.ALL})
    private Set<Option> choices;

    public Qstn(int id, String qstn, int points, String type) {
        this.id = id;
        this.qstn = qstn;
        this.points = points;
        this.type = type;
    }
}
