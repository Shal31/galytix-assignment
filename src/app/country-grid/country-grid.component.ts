import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from '../api.service';
import { Country } from './Country';
import { IDatasource, IGetRowsParams, GridOptions, GridApi } from 'ag-grid-community';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-grid',
  templateUrl: './country-grid.component.html',
  styleUrls: ['./country-grid.component.css']
})
export class CountryGridComponent implements OnInit {
  private countries:  Array<Country> = [];
  columnDefs:any[];
  rowData:any[];


  gridApi: GridApi;

  gridOptions: GridOptions = {
    // pagination: true,
    rowModelType: 'infinite',
    cacheBlockSize: 20,
    paginationPageSize: 30,
    infiniteInitialRowCount: 2,
    columnDefs: [
      {
        headerName: "CountryName",
        width: 50,
        valueGetter: "node.id",
        cellRenderer: "loadingCellRenderer",
      },
      {
        headerName: "Country Name",
        field: "name"
      },
      {
        headerName: "Code",
        field: "alpha2Code"
      },
      {
        headerName: "Capital",
        field: "capital"
      },
      {
        headerName: "Region",
        field: "region"
      },
      {
        headerName: "SubRegion",
        field: "subregion"
      }
    ],
    components: {
      loadingCellRenderer: (params) =>{
        if (params.value !== undefined) {
          return params.value;
        }else{
          return 'x';
        }
      }
    },
    
  };
 
 

  constructor(private apiService: ApiService,private router : Router, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) { }


  ngOnInit() {

    this.columnDefs = [
      { field: 'name',sortable: true,filter: true },
      { field: 'alpha2Code',sortable: true,filter: true },
      { field: 'capital',sortable: true,filter: true },
      { field: 'region',sortable: true,filter: true },
      { field: 'subregion',sortable: true,filter: true}
  ];

  
    this.getCountries();
    
  }

  onRowClicked(event:any){
    console.log(event)
    this.router.navigateByUrl("weather/"+event.data.capital+','+event.data.alpha2Code);
}


  dataSource: IDatasource = {
    rowCount: null,
    getRows: (params: IGetRowsParams) => {
      this.apiService.getAllCountries().subscribe((data: Array<Country>) => {
        setTimeout(() => {
          let rowsThisPage = data.slice(params.startRow, params.endRow);
          let lastRow = -1;
          if (data.length <= params.endRow) {
            lastRow = data.length;
          }
          params.successCallback(
            rowsThisPage, lastRow
          );
        }, 500);
      });
    }
  }



  public getCountries () {
    this.apiService.getAllCountries().subscribe((data: Array<Country>) => {
      this.countries =data;
      for (let i = 0; i < this.countries.length; i++) {
        console.log(i + ' -'  + this.countries[i].name);
      }
    });
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
    this.gridApi.setDatasource(this.dataSource);
  }
}
