"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClubsService = void 0;
const common_1 = require("@nestjs/common");
let ClubsService = class ClubsService {
    constructor() {
        this.clubs = [
            {
                id: 1,
                name: 'Big Data Club',
                description: 'Big Data Club is the first club of CSE BKU',
                image: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/399533366_384470327445258_2140970410482034026_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEoxIKKtRSAxPaJYzHuGak5OqrIIWKdtiw6qsghYp22LHXkhOfQXBfYyvntyqRHZmifM2QorZJcSheLuPFKQR1l&_nc_ohc=b1ESIh5S6J8AX818Wr2&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfCLur_ULbrSgu7sLuEebTdSC-XLFbG4w2hBV1T0JOPJDw&oe=65828963',
                contact: 'https://www.facebook.com/BDCofHCMUT',
            },
            {
                id: 2,
                name: 'CEAC',
                description: 'CLB học thuật ngành Kỹ thuật Máy tính - CEAC ',
                image: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/271927824_106879355234337_5150991607191174093_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGI0Cipwo6TZwSYvROq_RQTaLhmakFXM4VouGZqQVczhQ9I0HTHOW2rhjvKmMvvo-PEueSOEyz4_-WEUpwZ-Eil&_nc_ohc=lakwVlbXr3EAX9QcZ4v&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDDvGi6XsoCgerjn_zoTM8uXMAt-YJM93ZaoIYa0x5Wgw&oe=65834D64',
                contact: 'https://www.facebook.com/ceac.hcmut',
            },
            {
                id: 3,
                name: 'GameDev Club',
                description: 'CLB GameDev',
                image: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/299298947_561517075766912_2250304528555838943_n.png?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGVzgukx3xwc30Y281exXYyHfirbejDWIId-Ktt6MNYgtv9Ssv_-cFbyw5wZ92ub69FRLr62CwSz_WslrZWN3f7&_nc_ohc=7fUrVVCc9NwAX82QMor&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfCNOPL_87_UNlItFbRzeJpzO6WHZgLcFlU-c8SkVrwFNw&oe=6582F156',
                contact: 'https://www.facebook.com/hcmutGDC',
            },
        ];
    }
    create(createClubDto) {
        const newClub = { id: this.clubs.length + 1, ...createClubDto };
        this.clubs.push(newClub);
        return 'Add new club successfully';
    }
    findAll() {
        return this.clubs;
    }
    findOne(id) {
        if (id > this.clubs.length || id < 1) {
            return 'Id is not valid';
        }
        const thisClub = this.clubs.find((club) => club.id === id);
        if (thisClub) {
            return thisClub;
        }
        return 'Club not found';
    }
    update(id, updateClubDto) {
        const thisClub = this.clubs.find((club) => club.id === id);
        if (thisClub) {
            const updatedClub = {
                ...thisClub,
                ...updateClubDto,
            };
            this.clubs[id - 1] = updatedClub;
            return 'Update club successfully';
        }
        return 'Club not found';
    }
    remove(id) {
        const thisClub = this.clubs.find((club) => club.id === id);
        if (thisClub) {
            this.clubs = this.clubs.filter((club) => club.id !== id);
            return 'Remove club successfully';
        }
        return 'Club not found';
    }
};
exports.ClubsService = ClubsService;
exports.ClubsService = ClubsService = __decorate([
    (0, common_1.Injectable)()
], ClubsService);
//# sourceMappingURL=clubs.service.js.map