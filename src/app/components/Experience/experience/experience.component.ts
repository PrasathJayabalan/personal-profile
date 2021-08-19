import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  experienceArray = [
    {
      logo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pikpng.com%2Fpngvi%2FixhbRbw_astrazeneca-vector-png-astrazeneca-logo-png-clipart%2F&psig=AOvVaw3-cZqQGkViXNUrKlop7c8q&ust=1629215614444000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNCDrdvztfICFQAAAAAdAAAAABAD",
      companyName: 'AstraZeneca Pvt Ltd',
      project: 'Clini/MLCS and AZ Clinical Trails',
      projectDuration: 'Aug 2015 to Sept 2019',
    },
    {
      logo: "https://www.google.com/url?sa=i&url=https%3A%2F%2F180dc.org%2Fbranch%2Fhelsinki%2Fcapgemini-logo-transparent-png%2F&psig=AOvVaw28koPZBMYb-Q4x6nlP909M&ust=1629215660303000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNiFqML0tfICFQAAAAAdAAAAABAD",
      companyName: 'Capgemini Pvt Ltd',
      project: 'NBCU HOTSTEET and NBCU COMPASS',
      projectDuration: 'Oct 2019 to Jun 2021',
    },
    {
      logo:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fpnghut.com%2Fpng%2FtzJv6hCVmV%2Flogo-hcl-technologies-organization-design-brand-text-transparent-png&psig=AOvVaw3XcLdDbIJt0E3SdET4Sbs0&ust=1629215684586000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKCZ2Mn0tfICFQAAAAAdAAAAABAD",
      companyName: 'HCL Technologies Ltd',
      project: 'Standard Chartted Bank',
      projectDuration: 'Jul 2021 to Till now',
    },
  ];
  constructor() {}

  ngOnInit(): void {
    console.log("JSON",this.experienceArray);
  }
}
