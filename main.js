const Player = new NativeClass("Terraria", "Player");

Player.UpdateEquips.hook((original, self, i) => {
  original(self, i);

  const head = self.armor[10]; // Vanity head
  const body = self.armor[11]; // Vanity body
  const legs = self.armor[12]; // Vanity legs

  if (head && head.netID !== 0) {
    self.statDefense += head.defense;
    self.GrantArmorBenefits(head);
  }

  if (body && body.netID !== 0) {
    self.statDefense += body.defense;
    self.GrantArmorBenefits(body);
  }

  if (legs && legs.netID !== 0) {
    self.statDefense += legs.defense;
    self.GrantArmorBenefits(legs);
  }
});
