import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SearchUserComponent } from './components/search-user/search-user.component';
import { UserReposComponent } from './components/user-repos/user-repos.component';
import { SingleRepoComponent } from './components/single-repo/single-repo.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    SearchUserComponent,
    UserReposComponent,
    SingleRepoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
