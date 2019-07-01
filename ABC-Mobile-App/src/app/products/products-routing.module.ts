import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsPage } from './products.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: ProductsPage,
        children: [
            {
                path: 'peg-products',
                children: [
                    {
                        path: '',
                        loadChildren: './peg-products/peg-products.module#PEGProductsPageModule'
                    },
                    {
                        path: ':pegID',
                        loadChildren: './peg-products/peg-detail/peg-detail.module#PegDetailPageModule'
                    }
                ]
            },
            {
                path: 'elisa',
                children: [
                    {
                        path: '',
                        loadChildren: './elisa-kit/elisa-kit.module#ElisaKitPageModule'
                    },
                    {
                        path: 'elisaID',
                        loadChildren: './elisa-kit/elisa-detail/elisa-detail.module#ElisaDetailPageModule'
                    }
                ]
            },
            {
                path: 'intermediates',
                children: [
                    {
                        path: '',
                        loadChildren: './organic-intermediates/organic-intermediates.module#OrganicIntermediatesPageModule'
                    },
                    {
                        path: ':intermediatesID',
                        loadChildren: './organic-intermediates/organic-intermediates-detail/organic-intermediates-detail.module#OrganicIntermediatesDetailPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/products/tabs/peg-products'
            }
        ]
    },

    {
        path: '',
        redirectTo: '/products/tabs/peg-products',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule {}
