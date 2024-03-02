ALTER DATABASE he_finder CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
SET NAMES utf8mb4;
CREATE TABLE IF NOT EXISTS companies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    address TEXT,
    site VARCHAR(255),
    telephone VARCHAR(20),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO companies (name, address, site, telephone) VALUES
('Hospital Português da Bahia', 'Av. Princesa Isabel, 914 - Graça, Salvador - BA, 40130-030', 'http://www.hportugues.com.br/', '07132035555'),
('Hospital Santo Amaro', 'Ladeira do Campo Santo, s/n - Federação, Salvador - BA, 40301-155', 'http://www.fjs.org.br/', '07135045000'),
('Hospital Geral do Estado da Bahia', 'Av. Vasco da Gama, s/n - Brotas, Salvador - BA, 40286-901', 'https://www.saude.ba.gov.br/hospital/hospital-geral-do-estado/', null),
('Hospital Aliança', 'Av. Juracy Magalhães Júnior, 2096 - Rio Vermelho, Salvador - BA, 41920-180', 'http://www.hospitalalianca.com.br/', '07121085600'),
('Hospital Teresa de Lisieux', 'Av. Antônio Carlos Magalhães, 2408 - Itaigara, Salvador - BA, 41825-000', 'http://www.hapvida.com.br/', '07140023633'),
('HOSPITAL SÃO RAFAEL', 'Condomínio Edifício Espaço Empresarial - Caminho das Árvores, Salvador - BA, 41820-000', null, null),
('Hospital da Bahia', 'Av. Prof. Magalhães Neto, 1541 - Pituba, Salvador - BA, 41810-011', 'http://www.hospitaldabahia.com.br/', '07140200057'),
('Hospital Geral Roberto Santos (HGRS)', 'Rua Direta do Saboeiro, s/n - Cabula, Salvador - BA, 40301-110', 'http://www.saude.ba.gov.br/hgrs/', '07131177540'),
('Hospital São Rafael', 'Av. São Rafael, 2152 - São Marcos, Salvador - BA, 41253-190', 'https://www.rededorsaoluiz.com.br/hospital/sao-rafael', '07134098000'),
('Hospital Municipal de Salvador - HMS', 'R. Ver. Zezéu Ribeiro, s/n - Cajazeiras, Salvador – BA', 'https://www.santacasaba.org.br/unidades-de-negocio/hospital-municipal-de-salvador.html', '07132023500'),
('Hospital do Subúrbio', 'Rua Manuel Lino, 141 - Periperi, Salvador - BA, 40720-460', 'http://www.hospitaldosuburbio.com.br/', '07132178600'),
('Hospital da Sagrada Família', 'R. Plínio de Lima, 01 - Monte Serrat, Salvador - BA, 40415-065', 'http://hsf.org.br/', '07133109100'),
('Hospital Agenor Paiva', 'R. Henrique Dias, 241 - Caminho de Areia, Salvador - BA, 40415-275', 'http://agenorpaiva.com.br/', '07133104000'),
('HGESF - Hospital Geral Ernesto Simões Filho', 'Praça Conselheiro João Alfredo, s/n - Pau Miúdo, Salvador - BA, 40301-155', 'http://saude.ba.gov.br/hgesf/', '07131171600'),
('Hospital da Cidade', 'R. Saldanha Marinho, 88 - Liberdade, Salvador - BA, 40323-010', 'http://www.hospitaldacidade.com.br/', '07135058600'),
('Hospital Ana Nery', 'R. Saldanha Marinho, s/n - Caixa D''agua, Salvador - BA, 40301-155', 'http://www.han.net.br/', '07131171800'),
('Hospital Naval de Salvador', 'Av. da França, 1400 - Comercio, Salvador - BA, 40010-000', 'https://www.marinha.mil.br/dsm/postos-sedime', '07134152477'),
('Hospital Santa Izabel', 'Praça Conselheiro Almeida Couto, 500 - Nazaré, Salvador - BA, 40050-410', 'https://www.hospitalsantaizabel.org.br/', '07122038444'),
('CLAO - Medicina Integrada', 'Centro Médico Alexander Fleming, Av. Anita Garibaldi, 1477 - Sala 308 - Engenho Velho da Federacao, Salvador - BA, 40230-107', 'https://clao.com.br/', '07130222200'),
('Pelve Clinic I Fisioterapia Pélvica em Salvador I Pilates Garibaldi e Federação', 'Ed. Vinte Empresarial - R. Agnelo Brito, 110 - Sala 202 - Federação, Salvador - BA, 40210-245', 'https://pelveclinic.com.br/', '07130210801'),
('Clinica Daqui', 'R. Albino Fernandes, 63E - Sussuara, Salvador - BA, 41215-770', 'http://clinicadaqui.med.br/', '07130230123'),
('Clínica Facilita', 'Av. Antônio Carlos Magalhães, 3591, salas 01 e 02 - Parque Bela Vista, Salvador - BA, 41100-140', null, '07121326140'),
('Clinica Pronto Saude', 'Alameda Zulmira Ferreira, 1B - Saboeiro, Salvador - BA, 41180-335', null, '07133718128'),
('Clínica Médica Saint Germain Ltda', 'R. Itatuba, 201 - Parque Bela Vista, Salvador - BA, 40279-700', null, null),
('Clínica Viver', 'Av. Juracy Magalhães Júnior, 2490 - Rio Vermelho, Salvador - BA, 40301-110', null, null),
('Clínica Saúde +', 'R. Prof. Agripiniano de Barros, 228 - Caixa D''agua, Salvador - BA, 40323-000', null, '07132413241'),
('Clínica Florence | Unidade Salvador (BA)', 'R. Bela Vista do Cabral, 271 - Nazaré, Salvador - BA, 40055-000', 'http://clinicaflorence.com.br/', '07130382450');
