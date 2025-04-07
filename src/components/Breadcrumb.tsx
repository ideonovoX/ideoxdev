
import { useLocation } from 'react-router-dom';
import { Home } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Link } from 'react-router-dom';
import { useMemo } from 'react';

interface PathSegment {
  name: string;
  href: string;
  isLast: boolean;
}

const capitalizeFirstLetter = (string: string) => {
  if (!string) return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const formatSegmentName = (segment: string): string => {
  // Replace hyphens with spaces and capitalize each word
  return segment
    .split('-')
    .map(word => capitalizeFirstLetter(word))
    .join(' ');
};

const BreadcrumbNav = () => {
  const location = useLocation();
  
  const pathSegments = useMemo(() => {
    const segments = location.pathname.split('/').filter(segment => segment);
    
    // Build the path segments with their full paths
    return segments.map((segment, index) => {
      const href = '/' + segments.slice(0, index + 1).join('/');
      return {
        name: formatSegmentName(segment),
        href,
        isLast: index === segments.length - 1
      };
    });
  }, [location.pathname]);

  // Don't show breadcrumbs on the homepage
  if (location.pathname === '/') return null;

  return (
    <div className="container mx-auto px-4 md:px-8 py-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">
                <Home className="h-4 w-4" />
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          {pathSegments.map((segment, index) => (
            <BreadcrumbItem key={segment.href}>
              {segment.isLast ? (
                <BreadcrumbPage>{segment.name}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link to={segment.href}>{segment.name}</Link>
                </BreadcrumbLink>
              )}
              
              {!segment.isLast && <BreadcrumbSeparator />}
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbNav;
