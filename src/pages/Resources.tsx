
import BasicPage from '@/components/BasicPage';
import ResourceSearch from '@/components/resources/ResourceSearch';
import ResourceCategories from '@/components/resources/ResourceCategories';
import PopularResources from '@/components/resources/PopularResources';
import SupportCTA from '@/components/resources/SupportCTA';

const Resources = () => {
  return (
    <BasicPage
      title="Resources to help you succeed"
      highlightedWord="Resources"
      description="Explore our comprehensive collection of guides, tutorials, and documentation to get the most out of AutomateAI"
    >
      <div className="py-8">
        <ResourceSearch />
        <ResourceCategories />
        <PopularResources />
        <SupportCTA />
      </div>
    </BasicPage>
  );
};

export default Resources;
