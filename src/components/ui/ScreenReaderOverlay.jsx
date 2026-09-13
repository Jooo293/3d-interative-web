import { useScene } from '../../context/SceneContext';
import { useGalleryProjects, useAwards } from '../../hooks/useSanityData';
import { CONTENT_DATA, PLATFORM_CONFIG } from '../canvas/rooms/Studio/contentData';
import { ADDED_GALLERY_PROJECTS } from '../../config/galleryProjects';
import '../../styles/ScreenReaderOverlay.scss';

/**
 * ScreenReaderOverlay — A7 Accessibility
 * 
 * Invisible HTML layer providing screen reader access to 3D canvas content.
 * Contains buttons/links matching interactive 3D elements (doors, rooms).
 * Visually hidden via .sr-only but fully accessible to assistive tech.
 */
const ScreenReaderOverlay = () => {
    const { hasEntered, isInRoom, currentRoom, teleportTo, requestExit, openOverlay } = useScene();
    
    // Pobieranie danych do wygenerowania niewidocznego HTML-a dla SEO / robotów
    const remoteProjects = useGalleryProjects();
    const projects = [...(remoteProjects || []), ...ADDED_GALLERY_PROJECTS.filter(p => !remoteProjects?.some(item => item.id === p.id))];
    const studio = CONTENT_DATA;
    const awards = useAwards();

    return (
        <div className="sr-overlay" role="complementary" aria-label="3D 作品集无障碍导航">
            {/* Skip to content link */}
            <a href="#sr-main-nav" className="sr-only sr-focusable">
                跳至无障碍导航
            </a>

            {/* Main accessible navigation */}
            <nav id="sr-main-nav" className="sr-only" aria-label="作品集房间">
                <h1>李白的人力资源与行政管理作品集</h1>
                <h2>作品集导航</h2>

                {!hasEntered && (
                    <p>欢迎来到李白的互动作品集。工作地点：华南师范大学。</p>
                )}

                {hasEntered && !isInRoom && (
                    <>
                    <p>你现在位于走廊，请选择一个房间继续浏览：</p>
                        <ul>
                            <li>
                                <button onClick={() => teleportTo('about')} type="button">
                                    关于我 — 个人简介、经历与技能
                                </button>
                            </li>
                            <li>
                                <button onClick={() => teleportTo('gallery')} type="button">
                                    项目展示 — 研究与项目成果
                                </button>
                            </li>
                            <li>
                                <button onClick={() => teleportTo('contact')} type="button">
                                    联系我 — 沟通职位与合作机会
                                </button>
                            </li>
                            <li>
                                <button onClick={() => teleportTo('studio')} type="button">
                                    技能工作室 — 方法、工具与能力
                                </button>
                            </li>
                        </ul>
                    </>
                )}

                {hasEntered && isInRoom && (
                    <>
                        <p>
                            当前位置： {currentRoom === 'about' ? "关于我" :
                                currentRoom === 'gallery' ? "项目展示" :
                                    currentRoom === 'contact' ? "联系我" :
                                        currentRoom === 'studio' ? "技能工作室" : currentRoom} 房间。
                        </p>
                        <button onClick={requestExit} type="button">
                            返回走廊
                        </button>

                        {/* Room-specific content descriptions */}
                        {currentRoom === 'about' && (
                            <div aria-label="关于我内容">
                                <h3>关于李白</h3>
                                <p>我叫李白，关注人事管理与行政服务，擅长档案整理、薪酬福利材料审核和数据分析。希望以耐心、条理和细致的沟通，让日常工作更加顺畅。</p>
                                
                                {awards && (
                                    <section>
                                        <h4>荣誉成果</h4>
                                        <ul>
                                            {awards.sotd && awards.sotd.items && awards.sotd.items.map((a, i) => (
                                                <li key={i}>{a.label} - {a.date} {a.url && <a href={a.url}>查看</a>}</li>
                                            ))}
                                            {awards.sotm && awards.sotm.items && awards.sotm.items.map((a, i) => (
                                                <li key={i}>{a.label} - {a.date} {a.url && <a href={a.url}>查看</a>}</li>
                                            ))}
                                            {awards.other && awards.other.items && awards.other.items.map((a, i) => (
                                                <li key={i}>{a.label} - {a.date} {a.url && <a href={a.url}>查看</a>}</li>
                                            ))}
                                        </ul>
                                    </section>
                                )}
                            </div>
                        )}
                        {currentRoom === 'gallery' && (
                            <div aria-label="项目展示内容">
                                <h3>项目与研究</h3>
                                <p>这里记录人事实践、课题研究、量化分析与六因素人格镜小程序等经历。</p>
                                
                                {projects && projects.length > 0 && (
                                    <ul>
                                        {projects.map((p, i) => (
                                            <li key={i}>
                                                <h4>{p.title}</h4>
                                                <p>{p.description}</p>
                                                {p.url && p.url !== '#' ? <a href={p.url}>查看 {p.title}</a> : <button type="button" onClick={() => openOverlay({ ...p, layout: 'portfolio_sections', sections: p.sections || [{ title: '项目介绍', description: p.description }] })}>查看{p.title}</button>}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        )}
                        {currentRoom === 'contact' && (
                            <div aria-label="联系信息">
                                <h3>联系李白</h3>
                                <ul>
                                    <li><a href="mailto:2346794652@qq.com">邮件：2346794652@qq.com</a></li>
                                    <li><a href="https://www.douyin.com/search/NBA_Official?type=user" target="_blank" rel="noopener noreferrer">抖音：搜索 NBA_Official</a></li>
                                    <li><a href="https://space.bilibili.com/1683463886" target="_blank" rel="noopener noreferrer">B站：UID 1683463886</a></li>
                                    <li><a href="https://x.com/NASA" target="_blank" rel="noopener noreferrer">推特：@NASA</a></li>
                                    <li><a href="https://www.youtube.com/@hasbropulse" target="_blank" rel="noopener noreferrer">YouTube：@hasbropulse</a></li>
                                </ul>
                            </div>
                        )}
                        {currentRoom === 'studio' && (
                            <div aria-label="技能工作室内容">
                                <h3>技能工作室</h3>
                                <p>研究、电影海报、个人手绘、数字项目与 Lyria 音乐。</p>

                                {studio && studio.length > 0 && (
                                    <ul>
                                        {studio.map((s, i) => (
                                            <li key={i}>
                                                <h4>{s.title} ({PLATFORM_CONFIG[s.platform]?.label})</h4>
                                                <p>{s.description}</p>
                                                {s.url && <a href={s.url}>查看内容</a>}
                                                <button type="button" onClick={() => openOverlay(s)}>查看{s.title}</button>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        )}

                        {/* Quick navigation to other rooms */}
                        <h3>快速导航</h3>
                        <ul>
                            {currentRoom !== 'about' && (
                                <li><button onClick={() => teleportTo('about')} type="button">前往关于我</button></li>
                            )}
                            {currentRoom !== 'gallery' && (
                                <li><button onClick={() => teleportTo('gallery')} type="button">前往项目展示</button></li>
                            )}
                            {currentRoom !== 'contact' && (
                                <li><button onClick={() => teleportTo('contact')} type="button">前往联系我</button></li>
                            )}
                            {currentRoom !== 'studio' && (
                                <li><button onClick={() => teleportTo('studio')} type="button">前往技能工作室</button></li>
                            )}
                        </ul>
                    </>
                )}
            </nav>

            {/* Live region for state changes */}
            <div aria-live="polite" aria-atomic="true" className="sr-only">
                {isInRoom && `已进入${({about: "关于我", gallery: "项目展示", contact: "联系我", studio: "技能工作室"})[currentRoom] || ""}房间`}
            </div>
        </div>
    );
};

export default ScreenReaderOverlay;
