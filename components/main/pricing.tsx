import { Check, Minus, MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function Pricing() {
  return (
    <div className="w-full py-20 lg:py-40 bg-white">
      <div className="container mx-auto">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-semibold text-gray-900">
              합리적인 가격으로 시작하세요
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-gray-600 max-w-xl text-center">
              병·의원 규모에 맞는 최적의 요금제를 선택하실 수 있습니다.
            </p>
          </div>
          <div className="grid text-left w-full grid-cols-3 lg:grid-cols-4 divide-x border border-gray-200 rounded-lg overflow-hidden pt-20 bg-white">
            <div className="col-span-3 lg:col-span-1"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col">
              <p className="text-2xl font-semibold text-gray-900">스타트업</p>
              <p className="text-sm text-gray-600">
                개원을 준비하시거나 소규모 병·의원에 최적화된 플랜입니다.
              </p>
              <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
                <span className="text-4xl font-bold text-gray-900">₩300만</span>
                <span className="text-sm text-gray-500"> / 일시불</span>
              </p>
              <Button variant="outline" className="gap-4 mt-8">
                상담 신청 <MoveRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col bg-blue-50">
              <p className="text-2xl font-semibold text-gray-900">성장</p>
              <p className="text-sm text-gray-600">
                확장 중인 병·의원을 위한 프리미엄 기능이 포함된 플랜입니다.
              </p>
              <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
                <span className="text-4xl font-bold text-gray-900">₩500만</span>
                <span className="text-sm text-gray-500"> / 일시불</span>
              </p>
              <Button className="gap-4 mt-8 bg-blue-600 hover:bg-blue-700">
                상담 신청 <MoveRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col">
              <p className="text-2xl font-semibold text-gray-900">엔터프라이즈</p>
              <p className="text-sm text-gray-600">
                대형 병원 및 네트워크를 위한 맞춤형 솔루션을 제공합니다.
              </p>
              <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
                <span className="text-4xl font-bold text-gray-900">맞춤 견적</span>
                <span className="text-sm text-gray-500"> / 협의</span>
              </p>
              <Button variant="outline" className="gap-4 mt-8">
                문의하기 <PhoneCall className="w-4 h-4" />
              </Button>
            </div>
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 bg-gray-50">
              <b className="text-gray-900">주요 기능</b>
            </div>
            <div></div>
            <div className="bg-blue-50"></div>
            <div></div>
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 text-gray-700">
              반응형 디자인
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-blue-600" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center bg-blue-50">
              <Check className="w-4 h-4 text-blue-600" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-blue-600" />
            </div>
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 text-gray-700">
              SEO 최적화
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Minus className="w-4 h-4 text-gray-400" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center bg-blue-50">
              <Check className="w-4 h-4 text-blue-600" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-blue-600" />
            </div>
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 text-gray-700">
              예약 시스템
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Minus className="w-4 h-4 text-gray-400" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center bg-blue-50">
              <Check className="w-4 h-4 text-blue-600" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-blue-600" />
            </div>
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 text-gray-700">
              페이지 수
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <p className="text-gray-600 text-sm">5페이지</p>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center bg-blue-50">
              <p className="text-gray-600 text-sm">10페이지</p>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <p className="text-gray-600 text-sm">무제한</p>
            </div>
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 text-gray-700">
              유지보수
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Minus className="w-4 h-4 text-gray-400" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center bg-blue-50">
              <Check className="w-4 h-4 text-blue-600" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-blue-600" />
            </div>
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 text-gray-700">
              맞춤 기능 개발
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Minus className="w-4 h-4 text-gray-400" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center bg-blue-50">
              <Check className="w-4 h-4 text-blue-600" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-blue-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Pricing };
