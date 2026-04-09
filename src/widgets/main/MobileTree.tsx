import { ReactNode, useState } from "react";
import { Github, Key, Layers, Linkedin } from "lucide-react";

import Title from "@/shared/ui/Title";
import BasicButton from "@/shared/ui/BasicButton";
import OutlineButton from "@/shared/ui/OutlineButton";
import { OutlineStackSpan, SolidStackSpan } from "@/shared/ui/StackSpan";
import { careers, activities, ownedServices } from "@/shared/data/group";
import { developmentLogs } from "@/shared/data/development";
import { Drawer, DrawerTrigger } from "@/shared/shadcn/components/ui/drawer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/shadcn/components/ui/dialog";

import { TechStackDrawer } from "@/entities/main/TechStackDrawer";

type GroupType = Data.Development["linkedTo"];

const CONNECTOR_COLOR = "#d6dbe3";
const CARD_BORDER_STYLE = {
  borderColor: CONNECTOR_COLOR,
  borderWidth: "1.5px",
};

const getLinkedDevelopments = (linkedTo: GroupType, linkedId: number) =>
  developmentLogs.filter(
    (development) =>
      development.linkedTo === linkedTo && development.linkedId === linkedId,
  );

const MobileProfile = () => {
  const [isEmailCopied, setIsEmailCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("officialkyus@gmail.com");
      setIsEmailCopied(true);
      window.setTimeout(() => setIsEmailCopied(false), 1500);
    } catch {
      setIsEmailCopied(false);
    }
  };

  return (
    <section className="relative mb-6 px-1">
      <div className="relative flex items-stretch gap-3">
        <div className="theme-text-soft absolute right-1 top-0 text-[10px]">
          Designed & Made by <strong>Kyu</strong>
        </div>
        <img
          src="/profile_img.jpg"
          alt="Profile"
          className="h-[170px] w-[130px] rounded-md object-cover"
        />

        <div className="flex min-h-[170px] min-w-0 flex-1 flex-col">
          <div>
            <Title>
              <strong>강민규,</strong> Kyu
            </Title>

            <Dialog>
              <DialogTrigger className="w-max">
                <span className="inline-block w-max bg-[var(--accent-brand)] px-1.5 py-0.5 text-[12px] italic leading-tight text-white">
                  안전지대를 넘어서는 개발자
                </span>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="mb-5">
                    안전지대를 넘어서는 개발자, 강민규입니다.
                  </DialogTitle>
                  <DialogDescription className="text-[14px]">
                    <p>
                      개발 경험이 쌓이면 익숙한 기술과 환경 속에서{" "}
                      <strong className="text-[#0A5BBD]">안전지대</strong>가
                      형성됩니다.
                    </p>
                    <div className="p-1" />
                    <p>
                      발전과 변화가 빠른 개발 분야에서 이러한 안전지대에
                      머무르기보다,
                      <br />
                      <strong className="text-[#0A5BBD]">
                        넘어서고 도전하며, 성장을 지향
                      </strong>
                      해야 한다고 생각합니다.
                    </p>
                    <div className="p-1" />
                    <p>
                      이러한 소신을 가지고{" "}
                      <strong className="text-[#0A5BBD]">
                        변화와 문제를 두려워하지 않으며
                      </strong>
                      ,{" "}
                      <strong className="text-[#0A5BBD]">
                        효과적인 기술과 문제 해결방법
                      </strong>
                      을 도입하며 개발 직무에 임하고 있습니다.
                    </p>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            <div className="relative my-2 w-max">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="theme-text-soft block text-left text-[12px] leading-tight underline decoration-[var(--panel-border)] underline-offset-2"
                aria-label="Copy officialkyus@gmail.com"
                title="Copy: officialkyus@gmail.com"
              >
                Email: officialkyus@gmail.com
              </button>
              <span
                aria-hidden={!isEmailCopied}
                className={`absolute left-[calc(100%+10px)] top-1/2 z-20 -translate-y-1/2 rounded-md bg-black p-2 text-[12px] font-medium leading-none text-white shadow-sm transition-opacity duration-200 dark:bg-white dark:text-black ${
                  isEmailCopied
                    ? "opacity-100"
                    : "pointer-events-none opacity-0"
                }`}
              >
                복사됨
                <span className="absolute -left-[4px] top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 bg-black dark:bg-white" />
              </span>
            </div>
            <p className="theme-text-primary mt-1 text-[12px] leading-tight">
              <strong>연구원</strong> @ IDIS Co., Ltd
            </p>
            <p className="theme-text-primary mt-1 text-[12px] leading-tight">
              <strong>컴퓨터공학사 우등 졸업</strong> @ 중앙대학교
            </p>
          </div>

          <div className="mt-auto flex flex-wrap gap-2">
            <OutlineButton href="https://github.com/selfishAltruism">
              Github
              <Github size={16} className="-mr-[1px] -mt-[2.5px] ml-2" />
            </OutlineButton>
            {/* <OutlineButton href="https://www.linkedin.com/in/kyus/">
              <Linkedin size={17} />
            </OutlineButton> */}
            <Drawer>
              <DrawerTrigger asChild>
                <BasicButton>
                  기술 스택 상세
                  <Layers size={16} className="-mr-[1px] -mt-[2.5px] ml-2" />
                </BasicButton>
              </DrawerTrigger>
              <TechStackDrawer />
            </Drawer>
          </div>
        </div>
      </div>
    </section>
  );
};

const MobileDevelopmentNode = ({
  development,
  isFirst,
  isLast,
}: {
  development: Data.Development;
  isFirst: boolean;
  isLast: boolean;
}) => {
  return (
    <div className="relative pb-3 last:pb-0">
      {!isLast && (
        <span
          className="absolute left-[18px] top-0"
          style={{
            bottom: "-6px",
            width: "1.5px",
            backgroundColor: CONNECTOR_COLOR,
          }}
        />
      )}

      <svg
        className="absolute left-[18px] w-[36px] overflow-visible"
        style={{
          top: isFirst ? "-30px" : "0px",
          height: isFirst ? "66px" : "54px",
        }}
        viewBox={isFirst ? "0 0 36 66" : "0 0 36 54"}
        fill="none"
        aria-hidden="true"
      >
        <path
          d={
            isFirst
              ? "M1 0 L1 34 C1 48, 8 52, 18 52 L36 52"
              : "M1 1 L1 28 C1 36, 8 40, 18 40 L36 40"
          }
          stroke={CONNECTOR_COLOR}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span
        className="absolute left-[52px] h-2 w-2 -translate-y-1/2 rounded-full bg-[var(--accent-brand)]"
        style={{ top: isFirst ? "50px" : "36px" }}
      />

      <div
        className="theme-panel relative z-10 ml-12 rounded-lg p-4"
        style={CARD_BORDER_STYLE}
      >
        <h3 className="theme-text-primary mb-2 text-[15px] leading-snug">
          {development.title}
        </h3>
        <p className="theme-text-soft mb-1 text-[11px] leading-tight">
          {development.period}
        </p>
        <p className="theme-text-muted mb-3 text-[12px] leading-snug">
          {development.description}
        </p>
        <div className="mb-2 flex flex-wrap gap-1">
          <Key size={16} className="mr-1 min-w-4" />
          {development.tags.map((tag, idx) => (
            <OutlineStackSpan key={tag} idx={idx} tag={tag} />
          ))}
        </div>
        <div className="flex flex-wrap gap-1">
          <Layers size={16} className="mr-1 min-w-4" />
          {development.techStacks.map((tag, idx) => (
            <SolidStackSpan key={tag} idx={idx} tag={tag} />
          ))}
        </div>
        {development.link && (
          <div className="flex w-full justify-end">
            <div className="mt-3 w-min">
              <BasicButton to={development.link}>프로젝트 상세</BasicButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const MobileTreeItem = ({
  title,
  description,
  period,
  linkedTo,
  linkedId,
  actions,
}: {
  title: string;
  description: string;
  period: string;
  linkedTo: GroupType;
  linkedId: number;
  actions?: ReactNode;
}) => {
  const linkedDevelopments = getLinkedDevelopments(linkedTo, linkedId);

  return (
    <div className="mb-5">
      <div
        className="theme-panel relative z-10 mb-3 rounded-xl p-4"
        style={CARD_BORDER_STYLE}
      >
        <div className="mb-3 min-w-0">
          <h3 className="theme-text-primary text-lg leading-tight">{title}</h3>
          <p className="theme-text-soft mt-1 text-[11px] leading-tight">
            {period}
          </p>
        </div>
        <p className="theme-text-muted text-[13px] leading-snug">
          {description}
        </p>
        {actions && <div className="mt-3 flex flex-wrap gap-2">{actions}</div>}
      </div>

      {linkedDevelopments.length > 0 && (
        <div className="relative">
          {linkedDevelopments.map((development, index) => (
            <MobileDevelopmentNode
              key={development.id}
              development={development}
              isFirst={index === 0}
              isLast={index === linkedDevelopments.length - 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const MobileTreeSection = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) => {
  return (
    <section className="mb-8">
      <div className="mb-3">
        <Title description={description}>{title}</Title>
      </div>
      <div>{children}</div>
    </section>
  );
};

const MobileTree = () => {
  return (
    <main className="multi-gradient-background min-h-screen px-3 pb-10 pt-4 sm:hidden">
      <MobileProfile />

      <MobileTreeSection title="Career" description="Full-time experience">
        {careers.map((career) => (
          <MobileTreeItem
            key={career.id}
            title={career.company}
            description={`${career.position} - ${career.description}`}
            period={career.period}
            linkedTo="career"
            linkedId={career.id}
            actions={
              career.homepage && (
                <BasicButton href={career.homepage}>About Company</BasicButton>
              )
            }
          />
        ))}
      </MobileTreeSection>

      {ownedServices.length > 0 && (
        <MobileTreeSection
          title="Owned"
          description="Personal products and services"
        >
          {ownedServices.map((service) => (
            <MobileTreeItem
              key={service.id}
              title={service.name}
              description={service.description}
              period={service.period}
              linkedTo="owned-service"
              linkedId={service.id}
              actions={
                <OutlineButton href={service.result}>To Service</OutlineButton>
              }
            />
          ))}
        </MobileTreeSection>
      )}

      <MobileTreeSection
        title="Activity"
        description="Contract, internship, and other activities"
      >
        {activities.map((activity) => (
          <MobileTreeItem
            key={activity.id}
            title={activity.name}
            description={`${activity.position} - ${activity.description}`}
            period={activity.period}
            linkedTo="activity"
            linkedId={activity.id}
            actions={
              <>
                {activity.result && (
                  <OutlineButton href={activity.result}>
                    To Service
                  </OutlineButton>
                )}
                {activity.teamLink && (
                  <BasicButton href={activity.teamLink}>About Team</BasicButton>
                )}
                {activity.companyLink && (
                  <BasicButton href={activity.companyLink}>
                    About Company
                  </BasicButton>
                )}
              </>
            }
          />
        ))}
      </MobileTreeSection>
    </main>
  );
};

export default MobileTree;
