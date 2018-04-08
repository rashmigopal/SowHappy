import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import Dounat3D from 'animated-3d-piechart';

@Component({
  selector: 'app-dashboard',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  demand=[{
    crop: 'Tomato',
    percentage: 30
  },
  {
    crop: 'Potato',
    percentage: 10
  },
  {
    crop: 'Rice',
    percentage: 15
  },
  {
    crop: 'wheat',
    percentage: 30
  },
  {
    crop: 'Orange',
    percentage: 10
  }]
  Yield=[{
    crop: 'Tomato',
    percentage: 30
  },
  {
    crop: 'Onion',
    percentage: 10
  },
  {
    crop: 'Rice',
    percentage: 15
  },
  {
    crop: 'wheat',
    percentage: 30
  },
  {
    crop: 'Orange',
    percentage: 10
  }]
  landLordForm: FormGroup;
  producerForm: FormGroup;
  consumerForm: FormGroup;
  serviceForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.landLordForm = this.fb.group({
      TITLE: "",
      USER_ID: "",
      LAND_NAME: "",
      LOCATION: "",
      AREA: "",
      OFFER_TYPE: "",
      RATE: "",
      SOIL: "",
      WATER: ""
    }),
      this.producerForm = this.fb.group({
        TITLE: "",
        USER_ID: "",
        CROP_NAME: "",
        TENTATIVE_YIELD: "",
        QUANTITY: "",
        ORGANIC: "",
        INSURED: ""
      }),
      this.consumerForm = this.fb.group({
        TITLE: "",
        USER_ID: "",
        CROP_NAME: "",
        DEMAND_DATE: "",
        QUANTITY: ""
      }),
      this.serviceForm = this.fb.group({
        TITLE: "",
        SERVICE_TYPE: "",
        COMPANY_NAME: "",
        LOCATION: ""
      })
  }

  startAnimationForLineChart(chart) {
    let seq: any, delays: any, durations: any;
    seq = 0;
    delays = 80;
    durations = 500;

    chart.on('draw', function (data) {
      if (data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === 'point') {
        seq++;
        data.element.animate({
          opacity: {
            begin: seq * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    });

    seq = 0;
  };
  startAnimationForBarChart(chart) {
    let seq2: any, delays2: any, durations2: any;

    seq2 = 0;
    delays2 = 80;
    durations2 = 500;
    chart.on('draw', function (data) {
      if (data.type === 'bar') {
        seq2++;
        data.element.animate({
          opacity: {
            begin: seq2 * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    });

    seq2 = 0;
  };
  ngOnInit() {

    var chartId = 'piechart';
    var data = [
      {
        value: 25,
        color: 'orange',
        label: 'Orange'
      },
      {
        value: 30,
        color: 'rgb(172, 57, 57)',
        label: 'Wheat'

      },
      {
        value: 15,
        color: 'grey',
        label: 'Rice'

      },
      {
        value: 10,
        color: 'khaki',
        label: 'Potato'
      },
      {
        value: 20,
        color: 'rgb(255, 102, 102)',
        label: 'Tomato'
      },
    ];
    var config = [{linesColor:'white'}]
    Dounat3D.draw(chartId, data, config);



    var chartId = 'piechart1';
    var data1 = [
      {
        value: 25,
        color: 'orange',
        label: 'Orange'
      },
      {
        value: 30,
        color: 'rgb(153, 115, 0)',
        label: 'Wheat'

      },
      {
        value: 15,
        color: 'grey',
        label: 'Rice'

      },
      {
        value: 10,
        color: 'khaki',
        label: 'Potato'
      },
      {
        value: 20,
        color: 'rgb(255, 102, 102)',
        label: 'Tomato'
      },
    ];
    var config = [{linesColor:'white'}]
    Dounat3D.draw(chartId, data1, config);

    /**var chartId = 'piechart1';
    var data = [10, 20, 30];
    Dounat3D.draw(chartId, data);*/
    /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */

    const dataDailySalesChart: any = {
      labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      series: [
        [12, 17, 7, 17, 23, 18, 38]
      ],
    };

    const optionsDailySalesChart: any = {
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0
      }),
      low: 0,
      high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
      chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
    }

    var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

    this.startAnimationForLineChart(dailySalesChart);


    /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

    const dataCompletedTasksChart: any = {
      labels: ['Bananas', 'Apples', 'Grapes'],
      series: [20, 15, 40]
    };

    const optionsCompletedTasksChart: any = {
      labelInterpolationFnc: function (value) {
        return value[0]
      }
    }

    var responsiveOptions: any[] = [
      ['screen and (min-width: 640px)', {
        chartPadding: 30,
        labelOffset: 100,
        labelDirection: 'explode',
        labelInterpolationFnc: function (value) {
          return value;
        }
      }],
      ['screen and (min-width: 1024px)', {
        labelOffset: 80,
        chartPadding: 20
      }]
    ];

    var completedTasksChart = new Chartist.Pie('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart, responsiveOptions);

    // start animation for the Completed Tasks Chart - Line Chart
    this.startAnimationForLineChart(completedTasksChart);



    /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

    var dataEmailsSubscriptionChart = {
      labels: ['Bananas', 'Apples', 'Grapes'],
      series: [20, 15, 40]
    };
    var optionsEmailsSubscriptionChart = {
      labelInterpolationFnc: function (value) {
        return value[0]
      }
    };
    var responsiveOptions: any[] = [
      ['screen and (min-width: 640px)', {
        chartPadding: 30,
        labelOffset: 100,
        labelDirection: 'explode',
        labelInterpolationFnc: function (value) {
          return value;
        }
      }],
      ['screen and (min-width: 1024px)', {
        labelOffset: 80,
        chartPadding: 20
      }]
    ];
    var emailsSubscriptionChart = new Chartist.Pie('#emailsSubscriptionChart', dataEmailsSubscriptionChart, optionsEmailsSubscriptionChart, responsiveOptions);

    //start animation for the Emails Subscription Chart
    this.startAnimationForBarChart(emailsSubscriptionChart);
  }

  trendData=[

    {
		"trendId":"1",
		"likes":"76",
		"postId":2,
		"postTitle":"2 Acres land near EGL, Bangalore"
		},
		{
		"trendId":"2",
		"likes":"50",
		"postId":2,
		"postTitle":"2.5 acres dry land at JaiNagar with nearby well water facilitiy"
		},
		{
		"trendId":"3",
		"likes":"48",
		"postId":3,
		"postTitle":"2.5 acres fertile land at Manyata with nearby well water facilitiy"
		},
		{
		"trendId":"4",
		"likes":"44",
		"postId":4,
		"postTitle":"2.5 acres marshy land at Pallavaram, Chennai with nearby well water facilitiy"
		},
		{
		"trendId":"5",
		"likes":"39",
		"postId":5,
		"postTitle":"2.5 acres marshy land at JaiNagar with nearby well water facilitiy"
		}
  ];

serviceProviderManure=[
{
	"postId":11,
	"userId":1,
	"userName":"Sowmia S",
	"contactNo":"9555678211",
	"emailId":"sowmias@gmail.com",
	"postTitle":" Organic Vermicompost Manure Plant Food 20kg",
	"serviceType":"MANURE",
	"serviceName":"BANGALORE",
	"pincode":567890,
	"locationAddress":"EGL BANGALORE",
	"locationCity":"BANGALORE"
},
{
	"postId":12,
	"userId":2,
	"userName":"Suma T",
	"contactNo":"8776321209",
	"emailId":"sumat@gmail.com",
	"postTitle":" Culture Steamed Bone Meal 5 Kg",
	"serviceType":"MANURE",
	"serviceName":"BANGALORE",
	"pincode":567890,
	"locationAddress":"EGL BANGALORE",
	"locationCity":"BANGALORE"
},
{
	"postId":13,
	"userId":3,
	"userName":"Rashmi Gopal",
	"contactNo":"76651234100",
	"emailId":"rashmig@gmail.com",
	"postTitle":"Premium Epsom salt - Magnesium Sulphate (200 gm)",
	"serviceType":"MANURE",
	"serviceName":"BANGALORE",
	"pincode":567890,
	"locationAddress":"EGL BANGALORE",
	"locationCity":"BANGALORE"
},
{
	"postId":14,
	"userId":12,
	"userName":"Sunitha Srikantan",
	"contactNo":"9667251151",
	"emailId":"sunithasri@gmail.com",
	"postTitle":"Mustard Oil Cake Powder 900 GMS",
	"serviceType":"MANURE",
	"serviceName":"BANGALORE",
	"pincode":567890,
	"locationAddress":"EGL BANGALORE",
	"locationCity":"BANGALORE"
},
{
	"postId":15,
	"userId":14,
	"userName":"Sathish Kumar",
	"contactNo":"8754438101",
	"emailId":"sathishkmars@gmail.com",
	"postTitle":"Kraft Seeds Rajnighandha/Tube Rose Flower Bulbs ",
	"serviceType":"MANURE",
	"serviceName":"BANGALORE",
	"pincode":567890,
	"locationAddress":"EGL BANGALORE",
	"locationCity":"BANGALORE"
},
{
	"postId":15,
	"userId":14,
	"userName":"Manju Thomas",
	"contactNo":"7652312211",
	"emailId":"manjut@gmail.com",
	"postTitle":"Poly Grow Bags - UV Stabilized, Long Life Bags For Small And Medium Plants ",
	"serviceType":"MANURE",
	"serviceName":"BANGALORE",
	"pincode":567890,
	"locationAddress":"EGL BANGALORE",
	"locationCity":"BANGALORE"
},
{
	"postId":15,
	"userId":14,
	"userName":"Sathish Kumar",
	"contactNo":"8754438101",
	"emailId":"sathishkmars@gmail.com",
	"postTitle":" Naturally Treated Organic Carrot Seeds  ",
	"serviceType":"MANURE",
	"serviceName":"BANGALORE",
	"pincode":567890,
	"locationAddress":"EGL BANGALORE",
	"locationCity":"BANGALORE"
}

]


}
