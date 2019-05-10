import { Injectable } from '@angular/core';
import { Question } from './quiz';
import { HttpClient } from 'selenium-webdriver/http';

export class QuizService{

    // rootUrl: string = 'http://localhost:4444';
    score:number;
    questionNumber:number;
    correctAnswerCount:number;

    questionlist : Question[] = 
    [
        {
            "quesId":1,
            "quesText":"Which is the largest country in the world by population?",
            "options":["India","USA","China","Russia"],
            "answer":2,
            "userChoice":0
        },
        {
            "quesId":2,
            "quesText":"When did the second world war end?",
            "options":["1945","1939","1944","1942"],
            "answer":0,
            "userChoice":0
        },
        {
            "quesId":3,
            "quesText":"Which was the first country to issue paper currency?",
            "options":["USA","France","Italy","China"],
            "answer":3,
            "userChoice":0
        },
        {
            "quesId":4,
            "quesText":"Which city hosted the 1996 Summer Olympics?",
            "options":["Atlanta","Sydney","Athens","Beijing"],
            "answer":0,
            "userChoice":0
        },
        {
            "quesId":5,
            "quesText":"Who invented telephone?",
            "options":["Albert Einstein","Alexander Graham Bell","Isaac Newton","Marie Curie"],
            "answer":1,
            "userChoice":0
        }
    ]

    constructor(){

    }

    getQuestions():Question[]{
        return this.questionlist;
        /*
        Future implementation will be HTTP calls to a service from here
        */
    }

    getAnswers(){
        return this.questionlist;
    }

    registerParticipant(name: string, email: string) {

        // var body = {
        //     Name: name,
        //     Email: email
        // }

        //return this.http.send(this.rootUrl + '/api/registerParticipant', body);
        
        /*
        HTTP calls to a WebAPI from here
        ex: 
        return this.http.post(this.rootUrl + '/api/registerParticipant',body)
        */

       console.log('User ' + name + ' with email address ' + email + ' registered');

    }
}