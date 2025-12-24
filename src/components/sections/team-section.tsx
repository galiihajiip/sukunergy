import Link from 'next/link';
import { Instagram, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

// Team data
const teamMembers = [
  {
    id: '1',
    name: 'Anandhita Frisilla Utama',
    role: 'CEO',
    programStudi: 'Teknik Lingkungan – UPN "Veteran" Jawa Timur',
    instagramUrl: 'https://instagram.com/silaa.frs',
    photo: '/images/team/anandhita.jpg',
    bio: 'Chief Executive Officer yang memimpin visi dan strategi SUKUNERGY.',
  },
  {
    id: '2',
    name: 'Angelita Aliyah Putri',
    role: 'COO',
    programStudi: 'Teknik Lingkungan – UPN "Veteran" Jawa Timur',
    instagramUrl: 'https://instagram.com/angelita.aliyah',
    photo: '/images/team/angelita.jpg',
    bio: 'Chief Operating Officer yang mengelola operasional harian SUKUNERGY.',
  },
  {
    id: '3',
    name: 'Galih Aji Pangestu',
    role: 'CTO',
    programStudi: 'Informatika – UPN "Veteran" Jawa Timur',
    instagramUrl: 'https://instagram.com/galiihajiip',
    photo: '/images/team/galih.jpg',
    bio: 'Chief Technology Officer yang mengembangkan teknologi dan inovasi produk.',
  },
  {
    id: '4',
    name: 'Dewi Berliana Putri',
    role: 'CFO',
    programStudi: 'Teknik Lingkungan – UPN "Veteran" Jawa Timur',
    instagramUrl: 'https://instagram.com/dewiber_',
    photo: '/images/team/dewi.jpg',
    bio: 'Chief Financial Officer yang mengelola keuangan dan investasi SUKUNERGY.',
  },
  {
    id: '5',
    name: 'Fathimah Ummul Banin',
    role: 'CMO',
    programStudi: 'Teknik Lingkungan – UPN "Veteran" Jawa Timur',
    instagramUrl: 'https://instagram.com/fatima.ashoffie',
    photo: '/images/team/fathimah.jpg',
    bio: 'Chief Marketing Officer yang memimpin strategi pemasaran dan branding.',
  },
];

function TeamMemberCard({ member }: { member: (typeof teamMembers)[0] }) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-6 text-center">
        {/* Photo */}
        <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden border-4 border-primary/10">
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to initials if image fails
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <span className="hidden text-3xl font-bold text-primary">
            {member.name
              .split(' ')
              .map((n) => n[0])
              .slice(0, 2)
              .join('')}
          </span>
        </div>

        {/* Role Badge */}
        <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full mb-3">
          {member.role}
        </span>

        {/* Info */}
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          {member.name}
        </h3>
        <p className="text-xs text-gray-600 mb-3">{member.programStudi}</p>
        <p className="text-sm text-gray-500 mb-4">{member.bio}</p>

        {/* Instagram Link */}
        {member.instagramUrl && (
          <Button
            variant="outline"
            size="sm"
            asChild
            className="group-hover:border-primary group-hover:text-primary transition-colors"
          >
            <Link
              href={member.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2"
            >
              <Instagram className="h-4 w-4" />
              <span>Follow</span>
              <ExternalLink className="h-3 w-3" />
            </Link>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

export function TeamSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tim Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Kenali orang-orang hebat di balik SUKUNERGY yang berdedikasi menciptakan produk terbaik untuk Anda
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8 mb-12">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>

        {/* View Full Team CTA */}
        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/team">
              Lihat Tim Lengkap
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
