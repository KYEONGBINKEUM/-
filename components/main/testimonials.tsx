"use client";
import React from "react";
import { motion } from "framer-motion";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    text: "메드웹 덕분에 환자들이 쉽게 우리 병원을 찾을 수 있게 되었습니다. 전문적이고 세련된 홈페이지에 매우 만족합니다.",
    image: "https://avatar.vercel.sh/1",
    name: "김민수",
    role: "서울내과 원장",
  },
  {
    text: "SEO 최적화로 검색 노출이 크게 향상되었고, 신규 환자가 눈에 띄게 증가했습니다. 정말 감사합니다!",
    image: "https://avatar.vercel.sh/2",
    name: "이지영",
    role: "강남치과 원장",
  },
  {
    text: "빠른 개발 속도와 완벽한 유지보수 서비스. 메드웹은 의료 홈페이지 전문가입니다.",
    image: "https://avatar.vercel.sh/3",
    name: "박준호",
    role: "스마일안과 대표",
  },
  {
    text: "환자 예약 시스템까지 통합되어 업무 효율이 크게 개선되었습니다. 강력 추천합니다!",
    image: "https://avatar.vercel.sh/4",
    name: "최서연",
    role: "한의원 원장",
  },
  {
    text: "모바일 최적화가 완벽해서 환자분들의 만족도가 높아졌습니다.",
    image: "https://avatar.vercel.sh/5",
    name: "정우진",
    role: "정형외과 원장",
  },
  {
    text: "개원 준비 중 메드웹을 선택한 것이 최고의 결정이었습니다. 전문적인 상담과 빠른 제작에 감사드립니다.",
    image: "https://avatar.vercel.sh/6",
    name: "강혜진",
    role: "피부과 원장",
  },
];

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="p-10 rounded-3xl border border-gray-200 shadow-lg bg-white max-w-xs w-full"
                  key={i}
                >
                  <div className="text-gray-700 leading-relaxed">{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5 text-gray-900">
                        {name}
                      </div>
                      <div className="leading-5 text-gray-500 tracking-tight">
                        {role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

export const Testimonials = () => {
  const firstColumn = testimonials.slice(0, 2);
  const secondColumn = testimonials.slice(2, 4);
  const thirdColumn = testimonials.slice(4, 6);

  return (
    <section className="bg-white py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            고객 후기
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            메드웹과 함께한 병·의원들의 솔직한 이야기를 들어보세요
          </p>
        </div>

        <div className="flex justify-center gap-6 max-h-[738px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          <TestimonialsColumn
            testimonials={firstColumn}
            duration={15}
            className="hidden lg:block"
          />
          <TestimonialsColumn
            testimonials={secondColumn}
            duration={19}
            className="hidden md:block"
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            duration={17}
            className="hidden lg:block"
          />
          <TestimonialsColumn
            testimonials={testimonials}
            duration={17}
            className="lg:hidden"
          />
        </div>
      </div>
    </section>
  );
};
