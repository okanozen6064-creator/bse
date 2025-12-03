"use client"

import Script from "next/script"

export default function InstagramFeed() {
    return (
        <section className="py-24 px-6 bg-background border-t border-border">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">Instagram'da Biz</h2>
                    <p className="text-lg text-foreground/70">
                        En son uygulamalarımızı ve projelerimizi takip edin
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 justify-items-center">
                    {/* Embed 1 */}
                    <div className="w-full flex justify-center overflow-hidden">
                        <blockquote
                            className="instagram-media"
                            data-instgrm-permalink="https://www.instagram.com/reel/DRtj09zjQBL/?utm_source=ig_embed&amp;utm_campaign=loading"
                            data-instgrm-version="14"
                            style={{ background: '#FFF', border: 0, borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '540px', minWidth: '326px', padding: 0, width: 'calc(100% - 2px)' }}
                        >
                            <div style={{ padding: '16px' }}>
                                <a href="https://www.instagram.com/reel/DRtj09zjQBL/?utm_source=ig_embed&amp;utm_campaign=loading" style={{ background: '#FFFFFF', lineHeight: 0, padding: '0 0', textAlign: 'center', textDecoration: 'none', width: '100%' }} target="_blank" rel="noreferrer">
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '40px', marginRight: '14px', width: '40px' }}></div>
                                        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                                            <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '100px' }}></div>
                                            <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '60px' }}></div>
                                        </div>
                                    </div>
                                    <div style={{ padding: '19% 0' }}></div>
                                    <div style={{ display: 'block', height: '50px', margin: '0 auto 12px', width: '50px' }}>
                                        {/* SVG Icon omitted for brevity, Instagram script will replace this anyway */}
                                    </div>
                                    <div style={{ paddingTop: '8px' }}>
                                        <div style={{ color: '#3897f0', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 550, lineHeight: '18px' }}>Bu gönderiyi Instagram'da gör</div>
                                    </div>
                                    <p style={{ color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: '14px', lineHeight: '17px', marginBottom: 0, marginTop: '8px', overflow: 'hidden', padding: '8px 0 7px', textAlign: 'center', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                        BSE GARAGE ANTALYA-MANAVGAT (@bsegarage_manavgat)'in paylaştığı bir gönderi
                                    </p>
                                </a>
                            </div>
                        </blockquote>
                    </div>

                    {/* Embed 2 */}
                    <div className="w-full flex justify-center overflow-hidden">
                        <blockquote
                            className="instagram-media"
                            data-instgrm-permalink="https://www.instagram.com/reel/DRrLq4bjTpZ/?utm_source=ig_embed&amp;utm_campaign=loading"
                            data-instgrm-version="14"
                            style={{ background: '#FFF', border: 0, borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '540px', minWidth: '326px', padding: 0, width: 'calc(100% - 2px)' }}
                        >
                            <div style={{ padding: '16px' }}>
                                <a href="https://www.instagram.com/reel/DRrLq4bjTpZ/?utm_source=ig_embed&amp;utm_campaign=loading" style={{ background: '#FFFFFF', lineHeight: 0, padding: '0 0', textAlign: 'center', textDecoration: 'none', width: '100%' }} target="_blank" rel="noreferrer">
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '40px', marginRight: '14px', width: '40px' }}></div>
                                        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                                            <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '100px' }}></div>
                                            <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '60px' }}></div>
                                        </div>
                                    </div>
                                    <div style={{ padding: '19% 0' }}></div>
                                    <div style={{ paddingTop: '8px' }}>
                                        <div style={{ color: '#3897f0', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 550, lineHeight: '18px' }}>Bu gönderiyi Instagram'da gör</div>
                                    </div>
                                    <p style={{ color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: '14px', lineHeight: '17px', marginBottom: 0, marginTop: '8px', overflow: 'hidden', padding: '8px 0 7px', textAlign: 'center', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                        BSE GARAGE ANTALYA-MANAVGAT (@bsegarage_manavgat)'in paylaştığı bir gönderi
                                    </p>
                                </a>
                            </div>
                        </blockquote>
                    </div>

                    {/* Embed 3 */}
                    <div className="w-full flex justify-center overflow-hidden">
                        <blockquote
                            className="instagram-media"
                            data-instgrm-permalink="https://www.instagram.com/reel/DRrLC8SDQ6H/?utm_source=ig_embed&amp;utm_campaign=loading"
                            data-instgrm-version="14"
                            style={{ background: '#FFF', border: 0, borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '540px', minWidth: '326px', padding: 0, width: 'calc(100% - 2px)' }}
                        >
                            <div style={{ padding: '16px' }}>
                                <a href="https://www.instagram.com/reel/DRrLC8SDQ6H/?utm_source=ig_embed&amp;utm_campaign=loading" style={{ background: '#FFFFFF', lineHeight: 0, padding: '0 0', textAlign: 'center', textDecoration: 'none', width: '100%' }} target="_blank" rel="noreferrer">
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '40px', marginRight: '14px', width: '40px' }}></div>
                                        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                                            <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '100px' }}></div>
                                            <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '60px' }}></div>
                                        </div>
                                    </div>
                                    <div style={{ padding: '19% 0' }}></div>
                                    <div style={{ paddingTop: '8px' }}>
                                        <div style={{ color: '#3897f0', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 550, lineHeight: '18px' }}>Bu gönderiyi Instagram'da gör</div>
                                    </div>
                                    <p style={{ color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: '14px', lineHeight: '17px', marginBottom: 0, marginTop: '8px', overflow: 'hidden', padding: '8px 0 7px', textAlign: 'center', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                        BSE GARAGE ANTALYA-MANAVGAT (@bsegarage_manavgat)'in paylaştığı bir gönderi
                                    </p>
                                </a>
                            </div>
                        </blockquote>
                    </div>
                </div>
                <Script src="//www.instagram.com/embed.js" strategy="lazyOnload" />
            </div>
        </section>
    )
}
