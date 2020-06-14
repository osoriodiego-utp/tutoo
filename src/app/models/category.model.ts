export class CategoryModel {
    id: string;
    name: string;
    imageurl: any;
    tutors: number;

    constructor(name: string, imageurl: any) {
        this.id = '';
        this.name = name;
        this.imageurl = imageurl;
        this.tutors = 0;
    }
}