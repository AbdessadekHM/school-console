import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-card',
  templateUrl: './modal-card.component.html',
})
export class ModalCardComponent {
  @Input() isOpen: boolean = false;
  @Input() title: string = 'Modal';
  @Input() showSubmitButton: boolean = true;
  @Input() submitButtonText: string = 'Submit';
  @Input() cancelButtonText: string = 'Cancel';
  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }

  onSubmit(): void {
    this.submit.emit();
  }

  onOverlayClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }
}
