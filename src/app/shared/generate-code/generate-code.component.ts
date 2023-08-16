import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import JsBarcode from 'jsbarcode';
import * as printJS from 'print-js';

@Component({
  selector: 'app-generate-code',
  templateUrl: './generate-code.component.html',
  styleUrls: ['./generate-code.component.css'],
})
export class GenerateCodeComponent implements OnInit {
  generateForm: FormGroup;
  @ViewChild('barcodeCanvas') barcodeCanvas: ElementRef | undefined;
  submit: boolean;
  isGenerate: boolean;
  barcodes: string[] = [];
  barcode: any;
  constructor(private formBuilder: FormBuilder, private renderer: Renderer2) {
    this.submit = false;
    this.isGenerate = false;
  }


  ngOnInit(): void {
    this.starForm();
  }
  get controls(): any {
    return this.generateForm.controls;
  }
  starForm(): void {
    this.generateForm = this.formBuilder.group({
      numeroRef: ['', [Validators.required,
      Validators.pattern('^([a-zA-Z0-9]*)'),
      Validators.maxLength(10)
      ]],
      descripcion: ['', [Validators.required, Validators.pattern(/^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]*$/)]],
      cantidad: ['', [Validators.required]],
      precio: ['', [Validators.required, Validators.pattern('^([0-9]*)')]],
    })
  }
  clearForm() {
    debugger
    this.barcodes = [];
    this.generateForm.reset();
    this.isGenerate = false;
  }
  printBarCode() {
    const canvas: HTMLCanvasElement = this.barcodeCanvas.nativeElement;
    const imageDataUrl = canvas[0].toDataURL('image/png'); // Convertir el contenido del canvas a una URL de datos
    const printOptions = {
      printable: imageDataUrl,
      style: 'width:100%;', // Ajustar el estilo según tus necesidades
    };

    printJS(printOptions);
  }
  generateBarcode(): void {
    this.submit = this.generateForm.invalid === true ? true : false;
    if (!this.submit) {
      const numProducts = Number(this.generateForm.controls['cantidad'].value)
      for (let index = 0; index < numProducts; index++) {
        this.barcodes.push(String(this.generateForm.controls['numeroRef'].value))
      }
      this.barcodes.forEach(barcode => {
        const canvas = this.renderer.createElement('canvas');
        this.isGenerate = true;
        JsBarcode(canvas, barcode, {
          format: 'CODE128',
          displayValue: true
        });
        this.renderer.appendChild(this.barcodeCanvas.nativeElement, canvas);
      });
    }
  }
}


