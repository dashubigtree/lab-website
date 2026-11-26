import React, { useRef, useState, useMemo } from 'react';
import { Box, IconButton, MobileStepper, Paper, Typography, Chip, Stack } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { useLocale } from '@/i18n/LocaleProvider';

const images = [
    {
        label: '114',
        photoCount: 20, // 114 今年總張數（1~20）
        segments: [
            { start: 1, end: 7, text: { zh: '🏈Sports Nation 迎新送舊', en: "🏈 Sports Nation: Welcome and Farewell Party" } },
            { start: 8, end: 20, text: { zh: '🎊114年 期末聖誕暨尾牙聚餐', en: "🎊 2025 Year-End Christmas Party and Dinner" } },
        ]
    },    
    { label: '113', text: { zh: '🍸Cheers&Co.餐酒館', en: "🍸 Cheers&Co. Bistro" }, photoCount: 34 },
    { label: '112', text: { zh: '🎉饗食天堂', en: "🎉 Eatogether Buffet" }, photoCount: 2 },
    { label: '111', text: { zh: '🎄聖誕期末聚餐', en: "🎄 Christmas Year-End Dinner" }, photoCount: 4 },
];

function ImageCarousel() {
    const locale = useLocale();
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const allSlides = useMemo(() => {
        return images.flatMap((item, groupIndex) =>
            Array.from({ length: item.photoCount }, (_, i) => {
            const photoNo = i + 1;

            const segText =
                item.segments?.find(s => photoNo >= s.start && photoNo <= s.end)?.text;

            return {
                label: item.label,
                groupIndex,
                text: segText ?? item.text, // 有分段就用分段，沒有就用原本 item.text
                src: `/lab-photo/${item.label}/${photoNo}.jpg`,
            };
            })
        );
    }, []);
    const groupStartIndices = useMemo(() => {
        return images.map((img, i) =>
            images.slice(0, i).reduce((sum, img) => sum + img.photoCount, 0)
        );
    }, []);

    const currentGroupIndex = allSlides[activeIndex]?.groupIndex || 0;
    const currentGroupStart = groupStartIndices[currentGroupIndex];
    const currentGroupEnd = currentGroupStart + images[currentGroupIndex].photoCount - 1;
    const groupSteps = images[currentGroupIndex].photoCount;

    const handleChipClick = (groupIndex) => {
        const targetIndex = groupStartIndices[groupIndex];
        swiperRef.current?.slideTo(targetIndex);
    };

    const handleNext = () => {
        swiperRef.current?.slideNext();
    };

    const handleBack = () => {
        swiperRef.current?.slidePrev();
    };

    return (
        <Box sx={{ flexGrow: 1, bgcolor: '#F5F5F5', borderRadius: 5 }}>
            <Paper
                square
                elevation={0}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 50,
                    pl: 2,
                    bgcolor: '#F5F5F5',
                    borderRadius: 5,
                }}
            >
                <Stack direction="row" spacing={1} sx={{ overflowX: 'auto' }}>
                    {images.map((item, i) => (
                        <Chip
                            key={i}
                            variant={currentGroupIndex === i ? 'filled' : 'outlined'}
                            label={locale === 'zh' ? `${item.label} 年` : Number(item.label) + 1911}
                            onClick={() => handleChipClick(i)}
                            sx={{ cursor: 'pointer' }}
                        />
                    ))}
                </Stack>
            </Paper>

            <Swiper
                modules={[Autoplay]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => {
                    const newIndex = swiper.realIndex;
                    setActiveIndex(newIndex);

                    if (newIndex === currentGroupEnd) {
                        setTimeout(() => {
                            const nextGroupIndex = (currentGroupIndex + 1) % images.length;
                            const nextStart = groupStartIndices[nextGroupIndex];
                            swiper.slideTo(nextStart);
                        }, 3000);
                    }
                }}
                loop={false}
                slidesPerView={1}
                style={{ width: '100%', height: '100%' }}
            >
                {allSlides.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Box sx={{ position: 'relative', paddingTop: '70%' }}>
                            <Box
                                component="img"
                                src={item.src}
                                alt={item.text[locale]}
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Typography align="center" sx={{ mt: 1 }}>
                {allSlides[activeIndex]?.text[locale]} - {activeIndex - currentGroupStart + 1}
            </Typography>

            <MobileStepper
                variant="text"
                sx={{ bgcolor: 'transparent' }}
                steps={groupSteps}
                position="static"
                activeStep={activeIndex - currentGroupStart}
                nextButton={
                    <IconButton size="small" onClick={handleNext}>
                        <KeyboardArrowRight />
                    </IconButton>
                }
                backButton={
                    <IconButton size="small" onClick={handleBack}>
                        <KeyboardArrowLeft />
                    </IconButton>
                }
            />
        </Box>
    );
}

export default ImageCarousel;
