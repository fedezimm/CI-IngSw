import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).createComponent(AppComponent);

  }));

  it('El titulo debe ser Bienvenido a Ingenieria de Software ', async(()=>{
    const title=document.getElementById('title').innerHTML;
    expect(title).toContain('Bienvenido a Ingenieria de Software');

  }));

  it('El tag del titulo debe ser H1',async(()=>{
    const tag=document.getElementById('title').tagName;
    expect(tag).toBe('H1');
  }));

  it('El tag del link debe ser', async(()=>{
    const tag=document.getElementById('link').firstChild['tagName'];
    expect(tag).toBe('B')
  }));

});
