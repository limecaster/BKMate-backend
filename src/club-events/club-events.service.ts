import { Injectable } from '@nestjs/common';
import { CreateClubEventDto } from './dto/create-club-event.dto';
import { UpdateClubEventDto } from './dto/update-club-event.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClubEvent } from './entities/club-event.entity';

@Injectable()
export class ClubEventsService {
  constructor(
    @InjectRepository(ClubEvent)
    private clubEventRepository: Repository<ClubEvent>,
  ) {}
  private clubEvents = [
    {
      id: 1,
      eventName: 'eCSE Cup',
      title:
        'eCSE CUP - Giải đấu Thể thao Điện tử đã quay trở lại Level up, conquer the Cup!',
      description:
        'Tháng 11 này, sự trở lại của giải đấu thể thao điện tử đã sẵn sàng đốt lên ngọn lửa tình yêu của các gamers tại trường ĐH Bách khoa - ĐHQG-HCM!!! Đây chính là nơi để các bạn khám phá và thử thách giới hạn của bản thân. Các chiến binh sẽ phải kề vai sát cánh bên những người đồng đội cùng vượt qua những thử thách và chinh phục vị trí cao nhất của giải đấu. Liệu bạn có đang nghĩ tới Game nào không?Hãy cùng đoán xem đâu sẽ là sàn đấu để so tài kỹ năng nha Hãy nhanh chóng tìm cho mình những người đồng đội đáng tin và sẵn sàng cùng nhau tiến tới đỉnh cao thôi các bạn ơi!! Thời gian mở form:12/11/2023-24/11/2023 Link đăng ký: http://bit.ly/3QtIhAl (Lưu ý: đăng ký bằng domain là @hcmut.edu.vn) Thể lệ và hình thức: https://bit.ly/46bxIHQ Luật bảo chứng: https://bit.ly/4759nVz Cổng đăng ký sẽ đóng lại ngay khi có đủ 24 đội hợp lệ được ghi danh trong giải đấu nhé các tuyển thủ ơi',
      image:
        'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/400533589_725520659611177_5585950340260379735_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeH2oqUgbpR3WVEpBm1CxGs6PZpvpsf27io9mm-mx_buKuPuyJSJYJi22OOx50iFzIa251jNqefHE0-WuDB8Y10v&_nc_ohc=1Xrn58XY6CkAX_W9upu&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAgc95ecEtBZxxd2KO_NM8vG20jnp19P6ViXPgqOA1NWw&oe=6586BD8E',
      thumbnail:
        'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/400479752_726563659506877_2718659345909441049_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeFJ_RTYIo40V2cf2ibilXf0nrT8EQEMElqetPwRAQwSWr2Ndo5W92yHy6Dw6A0MKUk0ivZIX6LW4RYX-pA4r6m1&_nc_ohc=Hwqdd9TtCj4AX8j2Gbl&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfC5qq0tqfUSx6U9a9HkcUdmmGUXNo1W-5uani1ro726sA&oe=6584E5E9',
    },
    {
      id: 2,
      eventName: 'eCSE Cup',
      title:
        'eCSE CUP - Giải đấu Thể thao Điện tử đã quay trở lại Level up, conquer the Cup!',
      description:
        'Tháng 11 này, sự trở lại của giải đấu thể thao điện tử đã sẵn sàng đốt lên ngọn lửa tình yêu của các gamers tại trường ĐH Bách khoa - ĐHQG-HCM!!! Đây chính là nơi để các bạn khám phá và thử thách giới hạn của bản thân. Các chiến binh sẽ phải kề vai sát cánh bên những người đồng đội cùng vượt qua những thử thách và chinh phục vị trí cao nhất của giải đấu. Liệu bạn có đang nghĩ tới Game nào không?Hãy cùng đoán xem đâu sẽ là sàn đấu để so tài kỹ năng nha Hãy nhanh chóng tìm cho mình những người đồng đội đáng tin và sẵn sàng cùng nhau tiến tới đỉnh cao thôi các bạn ơi!! Thời gian mở form:12/11/2023-24/11/2023 Link đăng ký: http://bit.ly/3QtIhAl (Lưu ý: đăng ký bằng domain là @hcmut.edu.vn) Thể lệ và hình thức: https://bit.ly/46bxIHQ Luật bảo chứng: https://bit.ly/4759nVz Cổng đăng ký sẽ đóng lại ngay khi có đủ 24 đội hợp lệ được ghi danh trong giải đấu nhé các tuyển thủ ơi',
      image:
        'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/400533589_725520659611177_5585950340260379735_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeH2oqUgbpR3WVEpBm1CxGs6PZpvpsf27io9mm-mx_buKuPuyJSJYJi22OOx50iFzIa251jNqefHE0-WuDB8Y10v&_nc_ohc=1Xrn58XY6CkAX_W9upu&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAgc95ecEtBZxxd2KO_NM8vG20jnp19P6ViXPgqOA1NWw&oe=6586BD8E',
      thumbnail:
        'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/400479752_726563659506877_2718659345909441049_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeFJ_RTYIo40V2cf2ibilXf0nrT8EQEMElqetPwRAQwSWr2Ndo5W92yHy6Dw6A0MKUk0ivZIX6LW4RYX-pA4r6m1&_nc_ohc=Hwqdd9TtCj4AX8j2Gbl&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfC5qq0tqfUSx6U9a9HkcUdmmGUXNo1W-5uani1ro726sA&oe=6584E5E9',
    },
    {
      id: 3,
      eventName: 'eCSE Cup',
      title:
        'eCSE CUP - Giải đấu Thể thao Điện tử đã quay trở lại Level up, conquer the Cup!',
      description:
        'Tháng 11 này, sự trở lại của giải đấu thể thao điện tử đã sẵn sàng đốt lên ngọn lửa tình yêu của các gamers tại trường ĐH Bách khoa - ĐHQG-HCM!!! Đây chính là nơi để các bạn khám phá và thử thách giới hạn của bản thân. Các chiến binh sẽ phải kề vai sát cánh bên những người đồng đội cùng vượt qua những thử thách và chinh phục vị trí cao nhất của giải đấu. Liệu bạn có đang nghĩ tới Game nào không?Hãy cùng đoán xem đâu sẽ là sàn đấu để so tài kỹ năng nha Hãy nhanh chóng tìm cho mình những người đồng đội đáng tin và sẵn sàng cùng nhau tiến tới đỉnh cao thôi các bạn ơi!! Thời gian mở form:12/11/2023-24/11/2023 Link đăng ký: http://bit.ly/3QtIhAl (Lưu ý: đăng ký bằng domain là @hcmut.edu.vn) Thể lệ và hình thức: https://bit.ly/46bxIHQ Luật bảo chứng: https://bit.ly/4759nVz Cổng đăng ký sẽ đóng lại ngay khi có đủ 24 đội hợp lệ được ghi danh trong giải đấu nhé các tuyển thủ ơi',
      image:
        'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/400533589_725520659611177_5585950340260379735_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeH2oqUgbpR3WVEpBm1CxGs6PZpvpsf27io9mm-mx_buKuPuyJSJYJi22OOx50iFzIa251jNqefHE0-WuDB8Y10v&_nc_ohc=1Xrn58XY6CkAX_W9upu&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAgc95ecEtBZxxd2KO_NM8vG20jnp19P6ViXPgqOA1NWw&oe=6586BD8E',
      thumbnail:
        'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/400479752_726563659506877_2718659345909441049_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeFJ_RTYIo40V2cf2ibilXf0nrT8EQEMElqetPwRAQwSWr2Ndo5W92yHy6Dw6A0MKUk0ivZIX6LW4RYX-pA4r6m1&_nc_ohc=Hwqdd9TtCj4AX8j2Gbl&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfC5qq0tqfUSx6U9a9HkcUdmmGUXNo1W-5uani1ro726sA&oe=6584E5E9',
    },
    {
      id: 4,
      eventName: 'eCSE Cup',
      title:
        'eCSE CUP - Giải đấu Thể thao Điện tử đã quay trở lại Level up, conquer the Cup!',
      description:
        'Tháng 11 này, sự trở lại của giải đấu thể thao điện tử đã sẵn sàng đốt lên ngọn lửa tình yêu của các gamers tại trường ĐH Bách khoa - ĐHQG-HCM!!! Đây chính là nơi để các bạn khám phá và thử thách giới hạn của bản thân. Các chiến binh sẽ phải kề vai sát cánh bên những người đồng đội cùng vượt qua những thử thách và chinh phục vị trí cao nhất của giải đấu. Liệu bạn có đang nghĩ tới Game nào không?Hãy cùng đoán xem đâu sẽ là sàn đấu để so tài kỹ năng nha Hãy nhanh chóng tìm cho mình những người đồng đội đáng tin và sẵn sàng cùng nhau tiến tới đỉnh cao thôi các bạn ơi!! Thời gian mở form:12/11/2023-24/11/2023 Link đăng ký: http://bit.ly/3QtIhAl (Lưu ý: đăng ký bằng domain là @hcmut.edu.vn) Thể lệ và hình thức: https://bit.ly/46bxIHQ Luật bảo chứng: https://bit.ly/4759nVz Cổng đăng ký sẽ đóng lại ngay khi có đủ 24 đội hợp lệ được ghi danh trong giải đấu nhé các tuyển thủ ơi',
      image:
        'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/400533589_725520659611177_5585950340260379735_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeH2oqUgbpR3WVEpBm1CxGs6PZpvpsf27io9mm-mx_buKuPuyJSJYJi22OOx50iFzIa251jNqefHE0-WuDB8Y10v&_nc_ohc=1Xrn58XY6CkAX_W9upu&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAgc95ecEtBZxxd2KO_NM8vG20jnp19P6ViXPgqOA1NWw&oe=6586BD8E',
      thumbnail:
        'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/400479752_726563659506877_2718659345909441049_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeFJ_RTYIo40V2cf2ibilXf0nrT8EQEMElqetPwRAQwSWr2Ndo5W92yHy6Dw6A0MKUk0ivZIX6LW4RYX-pA4r6m1&_nc_ohc=Hwqdd9TtCj4AX8j2Gbl&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfC5qq0tqfUSx6U9a9HkcUdmmGUXNo1W-5uani1ro726sA&oe=6584E5E9',
    },
  ];
  create(createClubEventDto: CreateClubEventDto) {
    return this.clubEventRepository.save(createClubEventDto);
  }

  findAll() {
    return this.clubEventRepository.find();
  }

  findOne(id: number) {
    return this.clubEventRepository.findOneBy({ id });
  }

  update(id: number, updateClubEventDto: UpdateClubEventDto) {
    return this.clubEventRepository.update({ id }, updateClubEventDto);
  }

  remove(id: number) {
    return this.clubEventRepository.delete({ id });
  }
}
