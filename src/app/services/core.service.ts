import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export abstract class CoreService {
  private static  portBack ='http://localhost:8080/';
  //private static  portBack = 'http://93.125.115.115:8080/decisions/';
  protected webService: string;
  constructor() {
    this.webService = CoreService.portBack;
  }
}
