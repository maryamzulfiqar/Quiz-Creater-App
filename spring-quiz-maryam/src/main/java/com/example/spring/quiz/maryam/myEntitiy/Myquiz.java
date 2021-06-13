package com.example.spring.quiz.maryam.myEntitiy;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.mapping.Set;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;
@Data
@Entity
@NoArgsConstructor
public class Myquiz {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String title;
    private int points;
    private int duration;
    @Temporal(TemporalType.DATE)
    private Date timeallowed;

    @OneToMany(cascade = {CascadeType.ALL})
    private Set<Qstn> questions;

    public Myquiz(int id, String title, int points, int duration, Date date) {
        this.id = id;
        this.title = title;
        this.points = points;
        this.duration = duration;
        this.timeallowed = timeallowed;
    }

}
