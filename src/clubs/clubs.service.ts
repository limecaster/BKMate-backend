import { Injectable } from '@nestjs/common';
import { CreateClubDto } from './dto/create-club.dto';
import { UpdateClubDto } from './dto/update-club.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Clubs } from './entities/club.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClubsService {
  constructor(
    @InjectRepository(Clubs) private clubsRepository: Repository<Clubs>,
  ) {}
  private clubs = [
    {
      id: 1,
      name: 'Big Data Club',
      description: 'Big Data Club is the first club of CSE BKU',
      image:
        'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/399533366_384470327445258_2140970410482034026_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEoxIKKtRSAxPaJYzHuGak5OqrIIWKdtiw6qsghYp22LHXkhOfQXBfYyvntyqRHZmifM2QorZJcSheLuPFKQR1l&_nc_ohc=b1ESIh5S6J8AX818Wr2&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfCLur_ULbrSgu7sLuEebTdSC-XLFbG4w2hBV1T0JOPJDw&oe=65828963',
      contact: 'https://www.facebook.com/BDCofHCMUT',
    },
    {
      id: 2,
      name: 'CEAC',
      description:
        'Đến với CEAC, các bạn sẽ có cơ hội: Có thêm môi trường học tập, rèn luyện lành mạnh, bổ ích. Gặp gỡ, giao lưu với những người bạn có cùng niềm yêu thích với ngành Kỹ thuật Máy tính. Được hướng dẫn, hỗ trợ về kiến thức và kỹ năng từ các mentor có chuyên môn theo kế hoạch hoạt động của Câu lạc bộ. Được tham gia tổ chức các cuộc thi, các sự kiện do câu lạc bộ triển khai. Tham gia ngay: bit.ly/CEAC_tuyenquan2023_form',
      image:
        'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/271927824_106879355234337_5150991607191174093_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGI0Cipwo6TZwSYvROq_RQTaLhmakFXM4VouGZqQVczhQ9I0HTHOW2rhjvKmMvvo-PEueSOEyz4_-WEUpwZ-Eil&_nc_ohc=lakwVlbXr3EAX9QcZ4v&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDDvGi6XsoCgerjn_zoTM8uXMAt-YJM93ZaoIYa0x5Wgw&oe=65834D64',
      contact: 'https://www.facebook.com/ceac.hcmut',
    },
    {
      id: 3,
      name: 'GameDev Club',
      description: 'CLB GameDev',
      image:
        'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/299298947_561517075766912_2250304528555838943_n.png?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGVzgukx3xwc30Y281exXYyHfirbejDWIId-Ktt6MNYgtv9Ssv_-cFbyw5wZ92ub69FRLr62CwSz_WslrZWN3f7&_nc_ohc=7fUrVVCc9NwAX82QMor&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfCNOPL_87_UNlItFbRzeJpzO6WHZgLcFlU-c8SkVrwFNw&oe=6582F156',
      contact: 'https://www.facebook.com/hcmutGDC',
    },
  ];

  create(createClubDto: CreateClubDto) {
    return this.clubsRepository.save(createClubDto);
  }

  findAll() {
    return this.clubsRepository.find();
  }

  findOne(id: number) {
    return this.clubsRepository.findOneBy({ id });
  }

  update(id: number, updateClubDto: UpdateClubDto) {
    this.clubsRepository.update({ id }, updateClubDto);
  }

  remove(id: number) {
    this.clubsRepository.delete({ id });
  }
}
