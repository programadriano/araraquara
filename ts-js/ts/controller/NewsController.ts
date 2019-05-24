
class NewsController {

    private newsComponent: NewsComponent;

    constructor() {
        this.newsComponent = new NewsComponent();
        this.getNews();
    }

    getNews() {
        fetch(`https://smithsonianapiexternalsite.azurewebsites.net/api/v1/destaques`)
            .then(res => res.json())
            .then(res => {
                let news: News[] = res.result;
                let divresult = <HTMLDivElement>document.getElementById("news_tab");
                this.newsComponent.render(news, divresult);
            });
    }
}