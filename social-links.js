'use strict';

// Única configuração dos quatro canais. Ative um perfil apenas com URL confirmada.
const ALPHA_SOCIAL_LINKS = Object.freeze([
  { id: 'instagram', name: 'Instagram', url: 'https://www.instagram.com/adigital360/', note: '@adigital360 · abre em nova aba' },
  { id: 'whatsapp', name: 'WhatsApp', url: 'https://wa.me/5521965102326', note: 'Abrir conversa · nova aba' },
  { id: 'facebook', name: 'Facebook', url: null },
  { id: 'tiktok', name: 'TikTok', url: null },
]);

document.querySelectorAll('.social-list').forEach(list => {
  ALPHA_SOCIAL_LINKS.forEach(channel => {
    const item = document.createElement('li');
    const control = document.createElement(channel.url ? 'a' : 'span');
    control.className = 'social-channel' + (channel.url ? '' : ' unavailable');
    control.dataset.channel = channel.id;
    control.setAttribute('aria-label', channel.name + (channel.url ? ' — abre em nova aba' : ' — perfil ainda não disponibilizado'));
    if (!channel.url) control.setAttribute('role', 'img');
    if (channel.url) {
      control.href = channel.url;
      control.target = '_blank';
      control.rel = 'noopener noreferrer';
    }
    const icon = document.createElement('img');
    icon.src = 'assets/social/' + channel.id + '.svg';
    icon.width = 24;
    icon.height = 24;
    icon.alt = '';
    icon.setAttribute('aria-hidden', 'true');
    control.append(icon);
    item.append(control);
    list.append(item);
  });
});
