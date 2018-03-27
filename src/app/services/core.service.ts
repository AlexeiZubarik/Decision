import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export abstract class CoreService {
  //private static  portBack ='http://localhost:8080/';
  private static  portBack = 'https://decisiontree.herokuapp.com/';
  protected webService: string;
  constructor() {
    this.webService = CoreService.portBack;
  }
}