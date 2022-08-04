import { Injectable } from '@nestjs/common';

// Service should do the process and Controller should call the Service
@Injectable()
export class AppService {
    private dogs = ['Siberian', 'Pugs', 'Sebastian', 'Yeet'];

    getHello(): string {
        return 'Hello World!';
    }

    postMyYeet(payload: any): string {
        return payload;
    }

    getDog(id: number): string {
        return this.dogs[id] ? this.dogs[id] : 'null';
    }

    getDogs(): string {
        let text = '';
        this.dogs.forEach((dog) => {
            text += dog;
        });
        return text;
    }
}
