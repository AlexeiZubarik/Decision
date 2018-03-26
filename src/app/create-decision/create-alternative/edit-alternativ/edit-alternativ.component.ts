import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-edit-alternativ',
  templateUrl: './edit-alternativ.component.html',
  styleUrls: ['./edit-alternativ.component.css']
})
export class EditAlternativComponent{
  name = "";
  constructor(
    public dialogRef: MatDialogRef<EditAlternativComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
