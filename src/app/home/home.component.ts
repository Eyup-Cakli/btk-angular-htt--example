import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserModel } from '../models/user-model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserTablePipePipe } from '../pipes/user-table-pipe.pipe';
import { GenderTransformPipePipe } from '../pipes/gender-transform-pipe.pipe';
import { UserService } from '../user-service/user.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    UserTablePipePipe,
    GenderTransformPipePipe,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'gender', 'age'];
  users: UserModel[] = [];
  dataSource!: MatTableDataSource<UserModel[]>;
  searchText: string = "";
  searchForm = new FormControl("");

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  getUsersUrl: string = 'http://dummyjson.com/users';
  constructor(private _userService: UserService) {}

  ngOnInit() {
    this.getUserList();
    // this._userService.getAllUsers().subscribe((result: any) => {
    //   console.log(result);
    //   this.users = result?.users;
    // });
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  getUserList() {
    this._userService.getAllUsers().subscribe((result: any) => {
      this.dataSource = result?.users;
    })
    this.searchForm.valueChanges.subscribe(value => {
      this.searchUsers(value);
    })
  }

  searchUsers(text: any) {
    this._userService.getUserBySearch(text).subscribe((result: any) => {
      this.dataSource = result?.users;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  configDataTable(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
