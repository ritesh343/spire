import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements AfterViewInit,OnInit {
Number(_t164: { title: string; location: string; time: string; thumbnail: string; bgColor: string; border: string; }) {
throw new Error('Method not implemented.');
}
  @ViewChild('swiperEl', { static: false }) swiperEl!: SwiperContainer;
  swiperModules = [IonicSlides];
  slideOpts = {
    slidesPerView: 3, // Show 3 cards at a time
    spaceBetween: 10,
    navigation: false,
  };
  modules = [Navigation, Pagination];
  helpOptions = [
    { icon: 'assets/svg/consulatation.svg', text: '1:1 consultation' },
    { icon: 'assets/svg/meditation.svg', text: 'Guided meditation' },
    { icon: 'assets/svg/chanting.svg', text: 'Sacred Chanting' },
    { icon: 'assets/svg/journaling.svg', text: 'My Journaling' },
    { icon: 'assets/svg/care.svg', text: 'Daily Affirmations' }
  ];
  consultationsCategory = [
    { name: 'Emotional Healing', selected: true },
    { name: 'Intuitive Guidance', selected: false },
    { name: 'Inner Peace & Mindfulness', selected: false },
    { name: 'Energy & Chakra Alignment', selected: false },
  ];
  consultations = [
    {
      title: "Awakening Inner Peace – Nithya Shanti",
      description: "Nithya Shanti is an internationally acclaimed teacher of conscious living...",
      thumbnail: "assets/images/sample.png",
      bgColor: "linear-gradient(90deg, #FDA085 0%, #F6D365 100.1%)",
      border: '4px solid #FDA085'
    },
    {
      title: "Healing Through Sound & Vibration – Mira Anand",
      description: "Mira is a renowned sound healer and meditation coach...",
      thumbnail: "assets/images/sample_2.png",
      bgColor: "linear-gradient(90deg, #A1C4FD 0.1%, #C2E9FB 99.9%)",
      border: '4px solid #A1C4FD'
      // bgColor: "linear-gradient(to bottom, #FFDD94, #FFAB61)",
      // border: "#FFA500"
    },
    {
      title: "Unlocking the Power of Breathwork – Ravi Gautam",
      description: "Ravi specializes in pranayama and conscious breathing...",
      thumbnail: "assets/images/sample_3.png",
      bgColor: "linear-gradient(90deg, #FBC2EB -0.1%, #A6C1EE 100%)",
      border: '4px solid #FBC2EB'
    },
    {
      title: "Awakening Inner Peace – Nithya Shanti",
      description: "Nithya Shanti is an internationally acclaimed teacher of conscious living...",
      thumbnail: "assets/images/sample.png",
      bgColor: "linear-gradient(270deg, #FAD0C4 0%, #FFD1FF 100.84%)",
      border: '4px solid #FAD0C4'
    },
    {
      title: "Healing Through Sound & Vibration – Mira Anand",
      description: "Mira is a renowned sound healer and meditation coach...",
      thumbnail: "assets/images/sample.png",
      bgColor: "linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 100%),  lightgray -24.509px 0.023px / 100% 100% no-repeat",
      border: '4px solid #FDA085'
    },
    {
      title: "Unlocking the Power of Breathwork – Ravi Gautam",
      description: "Ravi specializes in pranayama and conscious breathing...",
      thumbnail: "assets/images/sample.png",
      bgColor: "linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 100%),  lightgray -24.509px 0.023px / 100% 100% no-repeat",
      border: '4px solid #FDA085'
    },
    
  ];

  musicLibraryList = [
    {
      title: "Oceanic Soundbath for Deep Relaxation",
      description: "Different people respond uniquely to the sounds of the ocean. However, due to the inherent correlation between the human system and planet Earth, both being composed of over 70% water, the sounds of water significantly contribute to overall well-being. The gentle rhythm of water sounds reduces stress levels and lowers blood pressure, inducing a profound sense of calmness. Embrace the soothing oceanic soundscape to enhance your mental and physical health, and experience the natural tranquility it brings.",
      thumbnail: "assets/images/sample-music.png",
      bgColor: "",
      border: '4px solid #FDA085'
    },
    {
      title: "Percussive Soundbath To Regulate Your Heart Rate",
      description: "Immerse yourself in this comprehensive chakra tune-up meditation, helping you balance your energy centers and enhance your spiritual well-being. Whether you're new to meditation or an experienced practitioner, this offers a serene and powerful journey toward inner harmony and vitality. Take a moment to connect with your higher self and experience the profound benefits of chakra activation.",
      thumbnail: "assets/images/sample-music-1.png",
      bgColor: "",
      border: '4px solid #A1C4FD'
      // bgColor: "linear-gradient(to bottom, #FFDD94, #FFAB61)",
      // border: "#FFA500"
    },
    {
      title: "Restorative Soundbath For Self-Healing",
      description: "Embark on an ethereal journey with our guided sound bath, where the soothing sounds of metallic resonance tubes and single resonators blend seamlessly to create a harmonious atmosphere. These instruments are tuned to specific frequencies that instill a deep sense of safety and comfort, promoting profound relaxation. As you listen, you’ll feel at ease to surrender and let your guard down, allowing your body’s natural self-healing process to take place. This guided sound bath provides a serene escape, fostering holistic well-being and inner peace.",
      thumbnail: "assets/images/sample-music-2.png",
      bgColor: "linear-gradient(90deg, #FBC2EB -0.1%, #A6C1EE 100%)",
      border: '4px solid #FBC2EB'
    },
    {
      title: "Restorative Soundbath For Self-Healing",
      description: "Embark on an ethereal journey with our guided sound bath, where the soothing sounds of metallic resonance tubes and single resonators blend seamlessly to create a harmonious atmosphere. These instruments are tuned to specific frequencies that instill a deep sense of safety and comfort, promoting profound relaxation. As you listen, you’ll feel at ease to surrender and let your guard down, allowing your body’s natural self-healing process to take place. This guided sound bath provides a serene escape, fostering holistic well-being and inner peace.",
      thumbnail: "assets/images/sample-music-2.png",
      bgColor: "linear-gradient(90deg, #FBC2EB -0.1%, #A6C1EE 100%)",
      border: '4px solid #FBC2EB'
    },
    {
      title: "Restorative Soundbath For Self-Healing",
      description: "Embark on an ethereal journey with our guided sound bath, where the soothing sounds of metallic resonance tubes and single resonators blend seamlessly to create a harmonious atmosphere. These instruments are tuned to specific frequencies that instill a deep sense of safety and comfort, promoting profound relaxation. As you listen, you’ll feel at ease to surrender and let your guard down, allowing your body’s natural self-healing process to take place. This guided sound bath provides a serene escape, fostering holistic well-being and inner peace.",
      thumbnail: "assets/images/sample-music-2.png",
      bgColor: "linear-gradient(90deg, #FBC2EB -0.1%, #A6C1EE 100%)",
      border: '4px solid #FBC2EB'
    },
    {
      title: "Restorative Soundbath For Self-Healing",
      description: "Embark on an ethereal journey with our guided sound bath, where the soothing sounds of metallic resonance tubes and single resonators blend seamlessly to create a harmonious atmosphere. These instruments are tuned to specific frequencies that instill a deep sense of safety and comfort, promoting profound relaxation. As you listen, you’ll feel at ease to surrender and let your guard down, allowing your body’s natural self-healing process to take place. This guided sound bath provides a serene escape, fostering holistic well-being and inner peace.",
      thumbnail: "assets/images/sample-music-2.png",
      bgColor: "linear-gradient(90deg, #FBC2EB -0.1%, #A6C1EE 100%)",
      border: '4px solid #FBC2EB'
    },
    
  ];

  musicCategory = [
    { name: 'Nature Sounds', selected: true },
    { name: 'Guided Meditations', selected: false },
    { name: 'Reflective Journals', selected: false },
    { name: 'Affirmations & Mantras', selected: false },
    { name: 'Healing sound', selected: false },
  ];
 
  eventLibraryList = [
    {
      title: "New Year : Practice Mindfulness & Meditation",
      location: "The Serenity Studio, New York City, NY",
      time:"March 23 , 7:30 AM",
      thumbnail: "assets/images/workshop.png",
      bgColor: "",
      border: '4px solid #FDA085',
      price:'20$'
    },
    {
      title: "Spiritual Growth: Guided Group Meditation",
      location: "The Serenity Studio, New York City, NY",
      time: "March 23 , 7:30 AM",
      thumbnail: "assets/images/workshop-1.png",
      bgColor: "",
      border: '4px solid #A1C4FD',
      // bgColor: "linear-gradient(to bottom, #FFDD94, #FFAB61)",
      // border: "#FFA500",
      price:'20$'
    },
    {
      title: "Restorative Soundbath For Self-Healing",
      location: "The Serenity Studio, New York City, NY",
      time: "March 23 , 7:30 AM",
      thumbnail: "assets/images/workshop-2.png",
      bgColor: "linear-gradient(90deg, #FBC2EB -0.1%, #A6C1EE 100%)",
      border: '4px solid #FBC2EB',
      price:'20$'
    },
    {
      title: "Restorative Soundbath For Self-Healing",
      location: "The Serenity Studio, New York City, NY",
      time: "March 23 , 7:30 AM",
      thumbnail: "assets/images/workshop-2.png",
      bgColor: "linear-gradient(90deg, #FBC2EB -0.1%, #A6C1EE 100%)",
      border: '4px solid #FBC2EB',
      price:'20$'
    },
    {
      title: "Restorative Soundbath For Self-Healing",
      location: "The Serenity Studio, New York City, NY",
      time: "March 23 , 7:30 AM",
      thumbnail: "assets/images/workshop-2.png",
      bgColor: "linear-gradient(90deg, #FBC2EB -0.1%, #A6C1EE 100%)",
      border: '4px solid #FBC2EB',
      price:'20$'
    },
    {
      title: "Restorative Soundbath For Self-Healing",
      location: "The Serenity Studio, New York City, NY",
      time: "March 23 , 7:30 AM",
      thumbnail: "assets/images/workshop-2.png",
      bgColor: "linear-gradient(90deg, #FBC2EB -0.1%, #A6C1EE 100%)",
      border: '4px solid #FBC2EB',
      price:'20$'
    },
    
  ];
  styleParam: [
    { bgColor: "linear-gradient(90deg, #FDA085 0%, #F6D365 100.1%)", border: '4px solid #FDA085' },
    { bgColor: "linear-gradient(90deg, #A1C4FD 0.1%, #C2E9FB 99.9%)", border: '4px solid #A1C4FD' },
    { bgColor: "linear-gradient(90deg, #FBC2EB -0.1%, #A6C1EE 100%)", border: '4px solid #FBC2EB' },
    { bgColor: "linear-gradient(270deg, #FAD0C4 0%, #FFD1FF 100.84%)", border: '4px solid #FAD0C4' },
    { bgColor: "linear-gradient(270deg, #FAD0C4 0%, #FFD1FF 100.84%)", border: '4px solid #FAD0C4' },//copy
    { bgColor: "linear-gradient(270deg, #FAD0C4 0%, #FFD1FF 100.84%)", border: '4px solid #FAD0C4' },//copy
    
  ];

  feedbackList = [
    {
      message: "The 1:1 consultation completely changed my perspective on life. The spiritual guide helped me unlock a deeper level of self-awareness. Highly recommend!”",
      thumbnail: "assets/images/sample-music.png",
      bgColor: "",
      border: '4px solid #FDA085',
      user:"Sophia R."
    },
    {
      message:"I love the sound library! The healing frequencies and guided meditations have been a daily source of peace and relaxation.",
      thumbnail: "assets/images/sample-music-1.png",
      bgColor: "",
      border: '4px solid #A1C4FD',
      user:"Sophia R."
      // bgColor: "linear-gradient(to bottom, #FFDD94, #FFAB61)",
      // border: "#FFA500"
    },
    {
      message:"I was skeptical at first, but after attending a guided session, I felt truly connected to my inner self. The platform is beautifully designed and easy to navigate.",
      thumbnail: "assets/images/sample-music-2.png",
      bgColor: "linear-gradient(90deg, #FBC2EB -0.1%, #A6C1EE 100%)",
      border: '4px solid #FBC2EB',
      user:"Sophia R."
    },
    
  ];

  faqList = [
    {active:false, question: 'What is Spire Wholebeing?', answer: "Spire Wholebeing Spire Wholebeing Spire Wholebeing" },
    {active:false, question: 'What is Spire Wholebeing?', answer: "Spire Wholebeing Spire Wholebeing Spire Wholebeing" },
    {active:false, question: 'What is Spire Wholebeing?', answer: "Spire Wholebeing Spire Wholebeing Spire Wholebeing" },
    {active:false, question: 'What is Spire Wholebeing?', answer: "Spire Wholebeing Spire Wholebeing Spire Wholebeing" },
  ];

  isBeginning: boolean = true;
  isEnd: boolean = false;
  isBeginningMusic: boolean = true;
  isEndMusic: boolean = false;
  isBeginningEvent: boolean = true;
  isEndEvent: boolean = false;
  isBeginningExpert: boolean = true;
  isEndExpert: boolean = false;
  isBeginningFeedback: boolean = true;
  isEndFeedback: boolean = false;
  slidPerView = 3.4;
  cnsultFilterPerView: number = 4;
  musicFilterPerView: number = 5;
  spaceFilterConsult: number = 10;
  musicFilterSpace: number = 10;
  feedbackPerView: number = 3;

  
  constructor() { 
    this. styleParam= [
      { bgColor: "linear-gradient(90deg, #FDA085 0%, #F6D365 100.1%)", border: '4px solid #FDA085' },
      { bgColor: "linear-gradient(90deg, #A1C4FD 0.1%, #C2E9FB 99.9%)", border: '4px solid #A1C4FD' },
      { bgColor: "linear-gradient(90deg, #FBC2EB -0.1%, #A6C1EE 100%)", border: '4px solid #FBC2EB' },
      { bgColor: "linear-gradient(270deg, #FAD0C4 0%, #FFD1FF 100.84%)", border: '4px solid #FAD0C4' },
      { bgColor: "linear-gradient(270deg, #FAD0C4 0%, #FFD1FF 100.84%)", border: '4px solid #FAD0C4' },//copy
      { bgColor: "linear-gradient(270deg, #FAD0C4 0%, #FFD1FF 100.84%)", border: '4px solid #FAD0C4' },//copy
      
    ];
  }

  ngOnInit(): void {
    this.updateSwiperConfig();
  }

  updateSwiperConfig() {
    const width = window.innerWidth;
    if (width > 1400) {
      this.slidPerView = 3.4;
      this.cnsultFilterPerView = 4;
      this.musicFilterPerView = 5;
      this.feedbackPerView = 3;
    } else if (width > 1250) {
      this.slidPerView = 3;
      this.cnsultFilterPerView = 4;
      this.musicFilterPerView = 5;
      this.feedbackPerView = 3;
    } else if (width > 1024) {
      this.slidPerView = 2.4;
      this.cnsultFilterPerView = 3;
      this.musicFilterPerView = 4.5;
      this.feedbackPerView = 3;
    } else if (width > 768) {
      this.slidPerView = 1.8;
      this.cnsultFilterPerView = 2.5;
      this.musicFilterPerView = 3.5;
      this.feedbackPerView = 2;
    } else {
      this.slidPerView = 1;
      this.cnsultFilterPerView = 1;
      if (width > 500) {
        this.musicFilterPerView = 2;
        this.cnsultFilterPerView = 2;
        this.feedbackPerView = 1;
      } else {
        this.musicFilterPerView = 1;
        this.cnsultFilterPerView = 1;
        this.feedbackPerView = 1;
      }
      
    }
  }

  prevSlide() {
    const swiperEl: any = document.getElementById('swiperConsultaion');
    swiperEl?.swiper?.slidePrev();
    this.isBeginning = swiperEl?.swiper.isBeginning;
    this.isEnd = swiperEl?.swiper.isEnd;
  }
  
  nextSlide() {
    const swiperEl: any = document.getElementById('swiperConsultaion');
    swiperEl?.swiper?.slideNext();
    this.isBeginning = swiperEl?.swiper.isBeginning;
    this.isEnd = swiperEl?.swiper.isEnd;
  }
  prevMusicSlide() {
    const swiperEl: any = document.getElementById('music-Slider');
    swiperEl?.swiper?.slidePrev();
    this.isBeginningMusic = swiperEl?.swiper.isBeginning;
    this.isEndMusic = swiperEl?.swiper.isEnd;
  }

  nextMusicSlide() {
    const swiperEl: any = document.getElementById('music-Slider');
    swiperEl?.swiper?.slideNext();
    this.isBeginningMusic = swiperEl?.swiper.isBeginning;
    this.isEndMusic = swiperEl?.swiper.isEnd;
  }

  prevEventSlide() {
    const swiperEl: any = document.getElementById('event-Slider');
    swiperEl?.swiper?.slidePrev();
    this.isBeginningEvent = swiperEl?.swiper.isBeginning;
    this.isEndEvent = swiperEl?.swiper.isEnd;
  }

  nextEventSlide() {
    const swiperEl: any = document.getElementById('event-Slider');
    swiperEl?.swiper?.slideNext();
    this.isBeginningEvent = swiperEl?.swiper.isBeginning;
    this.isEndEvent = swiperEl?.swiper.isEnd;
  }

  prevSlideExpert() {
    const swiperEl: any = document.getElementById('expertSlide');
    swiperEl?.swiper?.slidePrev();
    this.isBeginningExpert = swiperEl?.swiper.isBeginning;
    this.isEndExpert = swiperEl?.swiper.isEnd;
  }

  nextSlideExpert() {
    const swiperEl: any = document.getElementById('expertSlide');
    swiperEl?.swiper?.slideNext();
    this.isBeginningExpert = swiperEl?.swiper.isBeginning;
    this.isEndExpert = swiperEl?.swiper.isEnd;
  }


  prevFeedbackSlide() {
    const swiperEl: any = document.getElementById('feedbackSlider');
    swiperEl?.swiper?.slidePrev();
    this.isBeginningMusic = swiperEl?.swiper.isBeginning;
    this.isEndMusic = swiperEl?.swiper.isEnd;
  }

  nextFeedbackSlide() {
    const swiperEl: any = document.getElementById('feedbackSlider');
    swiperEl?.swiper?.slideNext();
    this.isBeginningMusic = swiperEl?.swiper.isBeginning;
    this.isEndMusic = swiperEl?.swiper.isEnd;
  }


  changeConsultaionFilter(item,type) {
   
  
    switch (type) {
      case 'music':
        this.musicCategory.forEach((data) => {
          data.selected = false;
        });
        break;
      case 'consultaion':
        this.consultationsCategory.forEach((data) => {
          data.selected = false;
        });
        break;
      
    }

    item.selected = true;
  }

  ngAfterViewInit(): void {
    
    // const buttonEl = document.getElementById('next');
    // buttonEl.addEventListener('click', () => {
    //   swiperEl?.swiper?.slideNext();
    // });
    
    // const splide =new Splide('.splide', {
    //   type: 'slide', // Change 'loop' to 'slide' to avoid cloning
    //   perPage: 3,
    //   gap: '10px',
    //   // autoWidth: true,
    //   pagination: false,
    //   arrows: true,
    //   clones: 0, // Prevents Splide from duplicating slides// Auto slide
    //   breakpoints: {
    //     1024: { perPage: 2 },
    //     768: { perPage: 1 },
    //   },
    // }).mount();

  //   document.getElementById('prevButton')?.addEventListener('click', () => splide.go('<'));
  // document.getElementById('nextButton')?.addEventListener('click', () => splide.go('>'));
  }

  accordionGroupChange(event, item) {
    item.active = !item.active;
  }

  @HostListener('window:resize', [])
    onResize() {
      this.updateSwiperConfig();
    }

}
