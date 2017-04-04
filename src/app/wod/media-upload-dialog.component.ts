import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';

@Component({
  selector: 'media-upload-dialog',
  templateUrl: './media-upload-dialog.html',
})

export class MediaUploadDialogComponent {
  constructor(public dialogRef: MdDialogRef<MediaUploadDialogComponent>) {}
}