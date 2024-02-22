
import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
    selector: 'shared-menubar',
    templateUrl: './menubar.component.html'
})
export class MenubarComponente implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [

            {
                label: 'Home',
                icon: PrimeIcons.HOME,
                routerLink:'home',
                // style: {' margin-left': '12rem'},
            },
            {
              separator:true, //no se como poner espacio
            },
            {
                label: 'Libros',
                icon: PrimeIcons.BOOK,
                routerLink:'libros',
                // style: {' margin-left': '12rem'},
            },
            {
                label: 'Autores',
                icon: 'pi pi-fw pi-user-edit',
                style: {"color":"blue"},
                routerLink:'autores',
            },
            {
                label: 'Temas',
                icon: PrimeIcons.PALETTE,
                routerLink:'temas',
            },
            {
                label: 'Formato',
                icon: 'pi  pi-box',
                routerLink:'formatos',
            },
            {
                label: 'Edicion',
                icon: 'pi pi-fw pi-power-off',
                routerLink:'ediciones',
            }
        ];
    }
}
