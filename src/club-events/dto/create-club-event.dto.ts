import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateClubEventDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    example: 'eCSE Cup',
    description: 'Name of the club event',
  })
  eventName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    example:
      'eCSE CUP - Giải đấu Thể thao Điện tử đã quay trở lại Level up, conquer the Cup!',
    description: 'Title of the club event',
  })
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    example:
      'Tháng 11 này, sự trở lại của giải đấu thể thao điện tử đã sẵn sàng đốt lên ngọn lửa tình yêu của các gamers tại trường ĐH Bách khoa - ĐHQG-HCM!!! ',
    description: 'Description of the club event',
  })
  description: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    example:
      'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/400533589_725520659611177_5585950340260379735_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeH2oqUgbpR3WVEpBm1CxGs6PZpvpsf27io9mm-mx_buKuPuyJSJYJi22OOx50iFzIa251jNqefHE0-WuDB8Y10v&_nc_ohc=1Xrn58XY6CkAX_W9upu&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAgc95ecEtBZxxd2KO_NM8vG20jnp19P6ViXPgqOA1NWw&oe=6586BD8E',
    description: 'Main image advertised of the club event',
  })
  image: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    example:
      'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/400479752_726563659506877_2718659345909441049_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeFJ_RTYIo40V2cf2ibilXf0nrT8EQEMElqetPwRAQwSWr2Ndo5W92yHy6Dw6A0MKUk0ivZIX6LW4RYX-pA4r6m1&_nc_ohc=Hwqdd9TtCj4AX8j2Gbl&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfC5qq0tqfUSx6U9a9HkcUdmmGUXNo1W-5uani1ro726sA&oe=6584E5E9',
    description: 'Thumbnail of the club event',
  })
  thumbnail: string;
}
