import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Crypto, Miner } from './post.model';
import { PostService } from './post.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit {
  @ViewChild('fileInput', { static: true })
  fileInput;
  form: FormGroup;
  selectedCrypto = '';
  selectedMiner = '';
  file: File | null = null;

  crypto: Crypto[] = [
    {value: 'btc-0', viewValue: 'BTC'},
    {value: 'ltc-1', viewValue: 'LTC'},
    {value: 'eth-2', viewValue: 'ETH'},
    {value: 'zen-3', viewValue: 'ZEN'},
    {value: 'ngr-4', viewValue: 'NGR'},
    {value: 'xzc-5', viewValue: 'XZC'}
  ];

  miner: Miner[] = [
    {value: 'antpool-0', viewValue: 'ANTPOOL'},
    {value: 'f2pool-1', viewValue: 'F2Pool'},
    {value: 'zensystem-2', viewValue: 'ZenSystem'},
    {value: 'energi', viewValue: 'Energi'},
    {value: 'zcoin', viewValue: 'Zcoin'}
  ];

  onClickFileInputButton(): void {
    this.fileInput.nativeElement.click();
  }

  onChangeFileInput(): void {
    const files: { [key: string]: File } = this.fileInput.nativeElement.files;
    this.file = files[0];
  }

  constructor(
    private postService: PostService
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      crypto: new FormControl(null, {validators: [Validators.required]}),
      miner: new FormControl(null, {validators: [Validators.required]}),
      file: new FormControl(null, {validators: [Validators.required]})
    });
  }

  onAddPost(form: NgForm): void {
    if (form.invalid) {
      return ;
    }
    console.log('hello');
    this.postService.addPost(
      this.selectedCrypto,
      this.selectedMiner,
      this.file
      // this.form.value.crypto,
      // this.form.value.miner,
      // this.form.value.file
    );
  }

}
