import BasicButton from "@/shared/ui/BasicButton";
import OutlineButton from "@/shared/ui/OutlineButton";
import { careers, activities, ownedServices } from "@/shared/data/group";
import { developmentLogs } from "@/shared/data/development";
import MobileDevelopmentNode from "@/entities/mobile/MobileDevelopmentNode";
import MobileProfile from "@/entities/mobile/MobileProfile";
import MobileTreeItem from "@/entities/mobile/MobileTreeItem";
import MobileTreeSection from "@/entities/mobile/MobileTreeSection";

type GroupType = Data.Development["linkedTo"];

const getLinkedDevelopments = (linkedTo: GroupType, linkedId: number) =>
  developmentLogs.filter(
    (development) =>
      development.linkedTo === linkedTo && development.linkedId === linkedId,
  );

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
            actions={
              career.homepage && (
                <BasicButton href={career.homepage}>About Company</BasicButton>
              )
            }
          >
            {getLinkedDevelopments("career", career.id).map(
              (development, index, arr) => (
                <MobileDevelopmentNode
                  key={development.id}
                  development={development}
                  isFirst={index === 0}
                  isLast={index === arr.length - 1}
                />
              ),
            )}
          </MobileTreeItem>
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
              actions={
                <OutlineButton href={service.result}>To Service</OutlineButton>
              }
            >
              {getLinkedDevelopments("owned-service", service.id).map(
                (development, index, arr) => (
                  <MobileDevelopmentNode
                    key={development.id}
                    development={development}
                    isFirst={index === 0}
                    isLast={index === arr.length - 1}
                  />
                ),
              )}
            </MobileTreeItem>
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
          >
            {getLinkedDevelopments("activity", activity.id).map(
              (development, index, arr) => (
                <MobileDevelopmentNode
                  key={development.id}
                  development={development}
                  isFirst={index === 0}
                  isLast={index === arr.length - 1}
                />
              ),
            )}
          </MobileTreeItem>
        ))}
      </MobileTreeSection>
    </main>
  );
};

export default MobileTree;
