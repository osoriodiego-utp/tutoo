export class RequestModel {
    id: string;
    name: string;
    phone: number;
    email: string;
    category: string;
    description: string;
    documenturl?: string;
    imageurl?: string;
    revised: boolean;

    constructor(name: string, phone: number, email: string, category: string, description: string, documenturl: string, imageurl: string) {
        this.id = '';
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.category = category;
        this.description = description;
        this.documenturl = documenturl;
        this.imageurl = imageurl;
        this.revised = false;
    }
}