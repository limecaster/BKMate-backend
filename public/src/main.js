"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const express = require("express");
const env = require("../env");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(express.json());
    app.use(express.json({ limit: '50mb' }));
    app.use(express.urlencoded({ limit: '50mb', extended: true }));
    app.enableCors({
        allowedHeaders: '*',
        origin: '*',
        methods: '*',
        credentials: true,
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle("BKMate's API")
        .setDescription("The BKMate's API description")
        .setVersion('1.0')
        .addTag('bkmate')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(env.PORT, env.HOST);
    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
//# sourceMappingURL=main.js.map