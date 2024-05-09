import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SearchUserComponent } from './components/search-user/search-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    SearchUserComponent
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
