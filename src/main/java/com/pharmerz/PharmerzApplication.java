package com.pharmerz;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@SpringBootApplication
public class PharmerzApplication {

	public static void main(String[] args) {
		SpringApplication.run(PharmerzApplication.class, args);
	}



}



@Component
class PharmerzApplicationCommandLineRunner implements CommandLineRunner{



	@Override

	public void run(String... strings) throws Exception {

	}
}
