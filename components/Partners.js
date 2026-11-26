"use client";

import Image from "next/image";
import { Box, Typography } from "@mui/material";
import MarqueeEffect from "react-fast-marquee";
import { useDictionary, useLocale } from "@/i18n/LocaleProvider";

const partners = [
    { name: { zh: "土地銀行", en: "Land Bank of Taiwan" }, logo: "partners/land_bank.jpg" },
    { name: { zh: "工研院", en: "ITRI" }, logo: "partners/itri.jpg" },
    { name: { zh: "中華郵政", en: "Chunghwa Post" }, logo: "partners/chunghwa_post.jpg" },
    { name: { zh: "精誠資訊", en: "SYSTEX" }, logo: "partners/SYSTEX.jpg" },
    { name: { zh: "明美科技", en: "MMT" }, logo: "partners/MMT.jpg" },
    { name: { zh: "台北富邦銀行", en: "Taipei Fubon Bank" }, logo: "partners/fubon.jpg" },
    { name: { zh: "鈊象電子", en: "IGS" }, logo: "partners/iGS.jpg" },
    { name: { zh: "英業達", en: "Inventec" }, logo: "partners/inventec.jpg" },
    { name: { zh: "來毅數位科技", en: "Lydsec" }, logo: "partners/keypasco.jpg" },
    { name: { zh: "耐斯診所", en: "Nice Clinic" }, logo: "partners/nice_clinic.jpg" },
    { name: { zh: "基點科技", en: "Cellopoint" }, logo:"partners/cellopoint.jpg"}
];

export default function MarqueePartners() {
    const locale = useLocale();
    const t = useDictionary().partners;

    return (
        <Box sx={{ width: "100%", overflow: "hidden", py: 2, backgroundColor: "#f4f4f4" }}>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                <Typography variant="h5" color="secondary" align="center" sx={{ fontWeight: 700 }}>
                    {t.title}
                </Typography>
            </Box>

            <Box sx={{ display: "flex", overflow: "hidden", whiteSpace: "nowrap", mb: 2 }}>
                <MarqueeEffect speed={50} direction="left" pauseOnHover autoFill>
                    {partners.map((partner, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                px: { xs: 3, sm: 4, md: 6 },
                                py: { xs: 1, sm: 2 },
                                mb: 1,
                                minWidth: { xs: 100, sm: 120, md: 140 },
                                maxWidth: { xs: 140, sm: 160, md: 180 },
                                borderRadius: 3,
                                backgroundColor: "#ffffff",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                marginRight: 4,
                                transition: "transform 0.3s ease-in-out",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                    width: { xs: 50, sm: 70, md: 80, lg: 90 },
                                    height: { xs: 35, sm: 45, md: 55, lg: 60 },
                                }}
                            >
                                <Image
                                    src={`/${partner.logo}`}
                                    alt={partner.name[locale]}
                                    fill
                                    style={{
                                        objectFit: 'contain',
                                        borderRadius: '8px',
                                    }}
                                />
                            </Box>
                            <Typography
                                variant="caption"
                                sx={{
                                    mt: 1,
                                    textAlign: "center",
                                    color: "#555",
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    fontWeight: 600,
                                    fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
                                }}
                            >
                                {partner.name[locale]}
                            </Typography>
                        </Box>
                    ))}
                </MarqueeEffect>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography variant="h6" align="center">
                    {t.invite}
                </Typography>
            </Box>
        </Box>
    );
}
